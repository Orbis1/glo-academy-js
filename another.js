const num = 266219;
const res = num.toString().split('').reduce((acc, n) => acc * n)
console.log(res);
console.log(res ** 3);
console.log(res.toString().slice(0,2));