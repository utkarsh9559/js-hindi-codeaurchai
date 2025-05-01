//truthy value
const useremail = []
if(useremail){
    console.log("got user mail");
    
}
else{
    console.log("usermail dont exist ");
    
}

//falsey value
 // false , 0 , -0 , BigInt 0n , null , undefined , NaN 
 //truthy values 
 //"0" , "false" , " " ,[] , {} , function(){ }

//  if(useremail.length=== 0){
//     console.log("array is empty");
    
//  }
// const emptyObj = {}
// if(Object.keys(emptyObj).length === 0){
// console.log("Object is empty");
// }

// NUllish coalescing operator (??): null undefined

let val1; 
//val1 = 5 ?? 10
//val1 = null ?? 10
//val1 = undefined ?? 20
val1 = null ?? 10 ?? 15

console.log(val1);

//terniary Operator 
// condition ? true: false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log(" greater than 80") : console.log("less than 80-");


