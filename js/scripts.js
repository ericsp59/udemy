"use strict";

function c(x){
    console.log(x);
}

const arr = [2,13,19,10,3,67];
arr.sort(compareNum);
c(arr);

function compareNum(a, b){
    return a - b; 
}

