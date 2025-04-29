function myname(){
    console.log("U");
    console.log("t");
    console.log("k");
    console.log("a");
    console.log("r");
    console.log("s");
    console.log("h");
    
}
myname()

// function addtwonumbers(number1 , number2){
//     console.log(number1+number2);
    
// }
// const result = addtwonumbers(4,8)
//  console.log("Result: " , result);//its giving undefined although its priting 8 when we call it directly 
 
function addtwonumbers(number1 , number2){
    let result = number1 + number2;
    return result
    console.log("utkarsh");//nothing will run after return statement 
    
}
 const result = addtwonumbers(4,8)
 //console.log("Result: " , result); 
 
function loginusermessage(username){
    if(username === undefined){
        console.log("please enter a username");
        return
        
    }
    return `${username} just logged in`
}

//console.log(loginusermessage("yassh"));

function calculatecartprice(val1 , val2 , ...num1){//these three dots are called rest operator
    return num1

}

//console.log(calculatecartprice(200 , 400 , 500 , 600));
const user = {
    username : "utkarsh",
    pricees: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.pricees}`);
    
}
handleObject(user)


const mynewArray = [200 , 400 , 100 , 600]

function returnsecondvalue(getarray){
    return getarray[3]
}
console.log(returnsecondvalue(mynewArray));


