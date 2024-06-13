function add(num:number,num2:number):number{ return num +num2;}
console.log(add(10,20));

const sub= (num1:number,num2:number):number =>num1 -num2;
console.log(sub(5,2));

function addmul(num:number,num2:number,...num3:number[]):number{ return num +num2+num3.reduce((a,b)=>a+b,0);}
let arr=[1,2,3,4,5]
console.log(addmul(10,20,...arr));