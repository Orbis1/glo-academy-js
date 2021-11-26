const title = "My project";
const screens = "Simple, Complex, Interactive";
const screenPrice = 468;
const rollback = 49;
const fullPrice = 100000;
const adaptive = true;

const runTask = ({description, fn}) => {
    console.log('//' + description);
    fn();
    console.log('');
}

const tasks = [
    {
        description: 'Вывести в консоль тип данных значений переменных title, fullPrice, adaptive',
        fn: () => {
            console.log(typeof title);
            console.log(typeof fullPrice);
            console.log(typeof adaptive);
        }
    },
    {
        description: 'Вывести в консоль длину строки screens',
        fn: () => {
            console.log(screens.length)
        }
    },
    {
        description: 'Вывести в консоль “Стоимость верстки экранов...',
        fn: () => {
            console.log(`“Стоимость верстки экранов ${screenPrice} рублей/ долларов/гривен/юани” 
            и “Стоимость разработки сайта ${fullPrice} рублей/ долларов/гривен/юани”`);
        }
    },
    {
        description: 'Привести строку screens к нижнему регистру и разбить строку на массив, вывести массив в консоль...',
        fn: () => {
            console.log(screens.toLowerCase().split(', '))
        }
    },
    {
        description: 'Вывести в консоль Процент отката посреднику за работу (fullPrice * (rollback/100))',
        fn: () => {
            console.log(fullPrice * (rollback/100))
        }
    }
]

tasks.forEach(task => runTask(task));
