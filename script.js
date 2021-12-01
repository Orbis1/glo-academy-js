let title;
let screens;
let screenPrice;
const rollback = 50;
let adaptive;
let serviceName1;
let serviceName2;
let allServicePrices;
let fullPrice;
let servicePercentPrice;

const isNumber = function (num) {
    return isFinite(num) && typeof num === "number";
};

const toNumber = str => {
    if (str === null) return;
    let value = str.replaceAll(" ", "");
    if (typeof value !== "number") value = Number(value);
    if (isFinite(value)) return value;
    console.log(`Can't convert "${str}"`);
};

const promTrim = function (msg, arg) {
    return prompt(msg.trim(), arg);
};

const asking = function () {
    title = promTrim("Как называется ваш проект?", " КаЛьКулятор Верстки");
    screens = promTrim("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");

    do {
        screenPrice = toNumber(promTrim("Сколько будет стоить данная работа"));
    } while (!isNumber(screenPrice));

    adaptive = confirm("“Нужен ли адаптив на сайте?”");
};

const getRollbackMessage = price => {
    switch (true) {
        case price > 30000:
            return "Даем скидку в 10%";
        case price > 15000 && price <= 30000:
            return "Даем скидку в 5%";
        case price > 0 && price <= 15000:
            return "Скидка не предусмотрена";
        default:
            return "Что то пошло не так";
    }
};

const getAllServicePrices = function () {
    let sum = 0;
    for (let i = 0; i < 2; i++) {

        let answer;

        if (i === 0) {
            serviceName1 = promTrim("Какой дополнительный тип услуги нужен?", "serviceName" + i);
        } else if (i === 1) {
            serviceName2 = promTrim("Какой дополнительный тип услуги нужен?", "serviceName" + i);
        }

        do {
            answer = toNumber(promTrim("Сколько это будет стоить?", 1000))
        } while (!isNumber(answer))
        
        sum += answer;
    }
    return sum;
};

const getTitle = () => {
    const str = title.toLowerCase().trim();
    return str[0].toUpperCase() + str.slice(1);
};

function getFullPrice() {
    return screenPrice + allServicePrices;
}

const getServicePercentPrices = () => {
    return Math.ceil(fullPrice - fullPrice * (rollback / 100));
};

const showTypeOf = v => console.log(v, typeof v);

asking();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
title = getTitle();
servicePercentPrice = getServicePercentPrices();

showTypeOf(title);
showTypeOf(fullPrice);
showTypeOf(adaptive);
console.log(screens.length);

// - вывод строки с типами экранов для разработки screens
console.log(`“Стоимость верстки экранов ${screenPrice} рублей” и “Стоимость разработки сайта ${fullPrice} рублей”`);

// - сообщение о скидке пользователю (вызовы функции getRollbackMessage)
console.log(getRollbackMessage(fullPrice));

// 5) Вывести в консоль строку из переменной screens в виде массива
console.log(screens.toLowerCase().split(", "));
console.log(servicePercentPrice);
