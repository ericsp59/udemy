"use strict";

function c(x){
    console.log(x);
}

//////////////////////// 2-23////////////////////////

let str =  'some';
// let strobj = new String(str);
//c(typeof(str));
// c(typeof(strobj));

//c([1, 2, 3]);


const soldier = {
    health: 400,
    armor: 100,
    sayHello: function(){
        c('Hello!');
    }
};

// const John = {
//     health: 100
// };

// //John.__proto__ = soldier;
// Object.setPrototypeOf(John, soldier);


const John = Object.create(soldier);

John.sayHello();