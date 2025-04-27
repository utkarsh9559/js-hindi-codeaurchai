// primitive
// 7 types: 1) String , Number  , boolean , null , undefined , symbol , BIgInt
// js is dymaically typed
const score = 100 
const scorevalue = 100.3
const isLoggedIn = false
const outsidetemp = null
let userEmail;
const id = Symbol('123')
const anotherid = Symbol('123')
console.log(id);
console.log(anotherid);

 console.log(id == anotherid);
  const bigNumber = 3447885430023240n

 const heros = ["shaktiman" , "naagraj" , "dogesh"];
  let myobj = {
    name: "utkarsh",
    age: 22,
 }

 const myFunction = function(){
    console.log("hello world");
    
 }
 console.log(typeof  bigNumber);
 console.log(typeof myFunction);
 console.log(typeof heros);
 console.log(typeof outsidetemp);
 
 
 
 
//reference (NON primitive)
//array , objects , functions