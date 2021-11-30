// const title = prompt("Как называется ваш проект?");
let title = " КаЛьКулятор Верстки";
// const screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");
const screens = "Простые, Сложные, Интерактивные";
// const screenPrice = Number(prompt("Сколько будет стоить данная работа", 12000));
const screenPrice = 12000;
const rollback = 49;
// const adaptive = confirm("“Нужен ли адаптив на сайте?”");
const adaptive = true;
// const serviceName1 = prompt("Какой дополнительный тип услуги нужен?");
const serviceName1 = "serviceName1";
// const servicePrice1 = Number(prompt("Сколько это будет стоить?"));
const servicePrice1 = 100;
// const serviceName2 = prompt("Какой дополнительный тип услуги нужен?");
const serviceName2 = "serviceName2";
// const servicePrice2 = Number(prompt("Сколько это будет стоить?"));
const servicePrice2 = 50;

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

// 1) Объявить функцию getAllServicePrices. Функция возвращает сумму всех дополнительных услуг. Результат сохраняем в переменную allServicePrices. Тип - function expression
const getAllServicePrices = () => servicePrice1 + servicePrice2;
const allServicePrices = getAllServicePrices();

// 2) Объявить функцию getFullPrice. Функция возвращает сумму стоимости верстки и стоимости дополнительных услуг (screenPrice + allServicePrices). Результат сохраняем в переменную fullPrice. Тип - function declaration
const fullPrice = getFullPrice();
function getFullPrice() {
    return screenPrice + allServicePrices;
}

// 3) Объявить функцию getTitle. Функция возвращает title меняя его таким образом: первый символ с большой буквы, остальные с маленькой". Учесть вариант что строка может начинаться с пустых символов. " КаЛьКулятор Верстки"
const getTitle = () => {
    const str = title.toLowerCase().trim();
    return str[0].toUpperCase() + str.slice(1);
};
title = getTitle();
console.log(title);

// 4) Объявить функцию getServicePercentPrices. Функция возвращает итоговую стоимость за вычетом процента отката. Результат сохраняем в переменную servicePercentPrice (итоговая стоимость минус сумма отката)
// - стоимость за вычетом процента отката посреднику (вызовы функции getServicePercentPrices)
const getServicePercentPrices = () => {
    return Math.ceil(fullPrice - fullPrice * (rollback / 100))
}
const servicePercentPrice = getServicePercentPrices;
console.log("🚀 ~ servicePercentPrice", servicePercentPrice);

const showTypeOf = (v) => console.log(v, typeof v);

// - вызовы функции showTypeOf
showTypeOf(title);
showTypeOf(fullPrice);
showTypeOf(adaptive);
console.log(screens.length);

// - вывод строки с типами экранов для разработки screens
console.log(`“Стоимость верстки экранов ${screenPrice} рублей/ долларов/гривен/юани” 
и “Стоимость разработки сайта ${fullPrice} рублей/ долларов/гривен/юани”`);

// - сообщение о скидке пользователю (вызовы функции getRollbackMessage)
console.log(getRollbackMessage(fullPrice));

// 5) Вывести в консоль строку из переменной screens в виде массива
console.log(screens.toLowerCase().split(", "));
