const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);
console.log(balance.toString().length);
console.log(balance.toFixed(2));//fixees the number to that point of decimal
 const otherNumber = 185.3485
 console.log(otherNumber.toPrecision(3)); //round of the value(first prority is given to number before decimal and then after the decciaml digit)
 
const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));//seprate it with cawmas (en-IN) coverts english to indian standard

//++++++++++++++++++++++ Maths +++++++++++++++
// console.log(Math);
// console.log(Math.abs(-4));//givers the absolute value of the number , removes sign 
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4 , 3 , 6 , 8));
// console.log(Math.max(4,3,6,8));

console.log(Math.floor(Math.random()*10) + 1);//always gives random  values between 0 and 1 
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1))+ min );









