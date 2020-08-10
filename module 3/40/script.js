const now = new Date();

console.log(now);
console.log(now.getFullYear());
console.log(now.getMonth()+1);
console.log(now.getDate());
console.log(now.getDay());

console.log(now.getTimezoneOffset());
console.log(now.getTime());

let start = new Date();

for (let i = 0; i < 10000; i++) {
    let sum = i ** 3;
    console.log('end');
}

let end = new Date();

console.log(`Цикл отработал за ${end - start} ms`);