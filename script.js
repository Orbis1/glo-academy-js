'use strict';

const AppData = {
  title: '',
  screens: '',
  screenPrice: 0,
  rollback: 50,
  adaptive: true,
  serviceName1: '',
  serviceName2: '',
  allServicePrices: 0,
  fullPrice: 0,
  servicePercentPrice: 0,

  asking() {
    AppData.title = AppData.promTrim(
      'Как называется ваш проект?',
      ' КаЛьКулятор Верстки'
    );
    AppData.screens = AppData.promTrim(
      'Какие типы экранов нужно разработать?',
      'Простые, Сложные, Интерактивные'
    );

    do {
      AppData.screenPrice = AppData.toNumber(
        AppData.promTrim('Сколько будет стоить данная работа', 10000)
      );
    } while (!AppData.isNumber(AppData.screenPrice));

    AppData.adaptive = confirm('“Нужен ли адаптив на сайте?”');
  },

  isNumber: num => isFinite(num) && typeof num === 'number',

  toNumber: str => {
    if (str === null) return;
    let value = str.replaceAll(' ', '');
    if (typeof value !== 'number') value = Number(value);
    if (isFinite(value)) return value;
    console.log(`Can't convert "${str}"`);
  },

  getRollbackMessage(price) {
    switch (true) {
      case price > 30000:
        return 'Даем скидку в 10%';
      case price > 15000 && price <= 30000:
        return 'Даем скидку в 5%';
      case price > 0 && price <= 15000:
        return 'Скидка не предусмотрена';
      default:
        return 'Что то пошло не так';
    }
  },

  getAllServicePrices() {
    let sum = 0;
    for (let i = 0; i < 2; i++) {
      let answer;

      if (i === 0) {
        AppData.serviceName1 = AppData.promTrim(
          'Какой дополнительный тип услуги нужен?',
          'serviceName' + i
        );
      } else if (i === 1) {
        AppData.serviceName2 = AppData.promTrim(
          'Какой дополнительный тип услуги нужен?',
          'serviceName' + i
        );
      }

      do {
        answer = AppData.toNumber(
          AppData.promTrim('Сколько это будет стоить?', 1000)
        );
      } while (!AppData.isNumber(answer));

      sum += answer;
    }
    return sum;
  },

  getTitle() {
    const str = AppData.title.toLowerCase().trim();
    return str[0].toUpperCase() + str.slice(1);
  },

  getFullPrice() {
    return AppData.screenPrice + AppData.allServicePrices;
  },

  getServicePercentPrices() {
    return Math.ceil(
      AppData.fullPrice - AppData.fullPrice * (AppData.rollback / 100)
    );
  },

  promTrim(msg, arg) {
    return prompt(msg.trim(), arg);
  },

  start() {
    AppData.asking();
    AppData.allServicePrices = AppData.getAllServicePrices();
    AppData.title = AppData.getTitle();
    AppData.fullPrice = AppData.getFullPrice();
    AppData.servicePercentPrice = AppData.getServicePercentPrices();
  },
};

AppData.start();

console.log(AppData.fullPrice);
console.log(AppData.servicePercentPrice);
