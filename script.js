const title = prompt("Как называется ваш проект?");
const screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");
const screenPrice = Number(prompt("Сколько будет стоить данная работа", 12000));
const rollback = 49;
const adaptive = confirm("“Нужен ли адаптив на сайте?”");

const serviceName1 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice1 = Number(prompt("Сколько это будет стоить?"));
const serviceName2 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice2 = Number(prompt("Сколько это будет стоить?"));

const fullPrice = screenPrice + servicePrice1 + servicePrice2;
const servicePercentPrice = Math.ceil(fullPrice - rollback);
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
