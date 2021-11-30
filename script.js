const title = "My project";
const screens = "Simple, Complex, Interactive";
const screenPrice = 468;
const rollback = 49;
const fullPrice = 100000;
const adaptive = true;

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(screens.length)
console.log(`“Стоимость верстки экранов ${screenPrice} рублей/ долларов/гривен/юани” 
и “Стоимость разработки сайта ${fullPrice} рублей/ долларов/гривен/юани”`);
console.log(screens.toLowerCase().split(', '))
console.log(fullPrice * (rollback/100))
