const name = "utkarsh"
const repoCount = 50
// console.log(name + repoCount + "Value");
console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gamename = new String('utkarsh-shyam-djgffuhf');
console.log(gamename[0]);
console.log(gamename.__proto__);
console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.charAt(2));
console.log(gamename.indexOf('t'));

const newString = gamename.substring(0,4)
console.log(newString);

const anotherStirng = gamename.slice(-6 , 3);
console.log(anotherStirng);

const newStringone = "   utkarsh   "
console.log(newStringone);
console.log(newStringone.trim());

const url = "https://utkarsh.com/utkarsh%20rhfjsd"
url.replace('%20' , '-')
console.log(url.replace('%20' , '-'));
console.log(url.includes('sky'));

console.log(gamename.split('-'));





