const num = 266219;

const runTask = ({ description, fn }) => {
    console.log("//" + description);
    result = fn(result);
    console.log(result);
    console.log("");
};

const tasks = [
    {
        description: "Вывести в консоль произведение (умножение) цифр этого числа",
        fn: () => {
            let result = 1;
            const str = num.toString();
            const arr = str.split('');

            console.log(arr.join(", "));

            arr.forEach(n => {
                console.log(`${result} * ${n} = ${result * n}`);
                result *= n;
            });

            return result;
        },
    },
    {
        description: "Вывести в консоль произведение (умножение) цифр этого числа (через eval)",
        fn: () => {
            const str = num.toString();
            const arr = str.split('');
            const str4eval = arr.join('*')
            return eval(str4eval);
        },
    },
    {
        description: "Полученный результат возвести в степень 3, используя только 1 оператор (Math.pow не подходит)",
        fn: (prevResult) => {
            return prevResult ** 3;
        },
    },
    {
        description: "Вывести в консоль первые 2 цифры полученного числа",
        fn: (prevResult) => {
            return prevResult.toString().slice(0,2);
        },
    },
];

let result;
tasks.forEach(task => runTask(task));
