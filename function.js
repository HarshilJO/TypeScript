"use strict";
function add(num, num2) { return num + num2; }
console.log(add(10, 20));
const sub = (num1, num2) => num1 - num2;
console.log(sub(5, 2));
function addmul(num, num2, ...num3) { return num + num2 + num3.reduce((a, b) => a + b, 0); }
let arr = [1, 2, 3, 4, 5];
console.log(addmul(10, 20, ...arr));
