const title = prompt("Как называется ваш проект?");
const screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");
const screenPrice = Number(prompt("Сколько будет стоить данная работа", 12000));
const rollback = 49;
const adaptive = confirm("“Нужен ли адаптив на сайте?”");

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(screens.length)
console.log(`“Стоимость верстки экранов ${screenPrice} рублей/ долларов/гривен/юани” 
и “Стоимость разработки сайта ${fullPrice} рублей/ долларов/гривен/юани”`);
console.log(screens.toLowerCase().split(', '))
console.log(fullPrice * (rollback/100))

const serviceName1 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice1 = Number(prompt("Сколько это будет стоить?"));
const serviceName2 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice2 = Number(prompt("Сколько это будет стоить?"));

const fullPrice = screenPrice + servicePrice1 + servicePrice2;
const servicePercentPrice = Math.ceil(fullPrice - (fullPrice * (rollback/100)));
console.log("🚀 ~ servicePercentPrice", servicePercentPrice);

const discount = price => {
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

console.log(discount(fullPrice));
