"use strict";

function c(x){
    console.log(x);
}


//////////////////////// 2-22///////////////////////////////
const obj = {
    a: 5,
    b: 1
};


function copy(mainObj) {
    let resObj = {};
    for (let key in mainObj) {
        resObj[key] = mainObj[key];
    }
    return resObj;
}

let copyObj = copy(obj);
copyObj.a = 15;

//c(copyObj);
//c(obj);


const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 8
    }
};

const add = {
    d: 17,
    e: 20
};



const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();


const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];

//c(internet);   

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}
      
const num = [2, 5, 7];

//log(...num);



const array = ['a', 'b'];
const newArray2 = [...array];