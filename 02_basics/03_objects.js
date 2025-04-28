// singleton
// object literals
const mysym = Symbol("key1")
const JsUser = {
    name:"utkarsh",
    "full name" : "Utkarsh singh",
    age: 21,
    [mysym] : "mykey1",//use [] if you want to use mysym as symbol otherwise it will take it as string 
    location:"delhi",
    email : "utkarsh@google.com",
    isLoggedIn: false,
    lastLoginDays : ["Monday" , " Saturday"]
}
console.log(JsUser.email);
console.log(JsUser["email"]);
//console.log(JsUser.full name);//we cant declare string with dot , it will not run
console.log(JsUser["full name"]);
console.log( JsUser[mysym]);

JsUser.email = "utkarsh@chatgpt.com"
 //Object.freeze(JsUser)//to lock the value
 //JsUser.email = "utkarsh@hike.com"
 //console.log(JsUser);

 JsUser.greeting = function(){
   console.log("hello js user ");
  }
  JsUser.greetingtwo = function(){
    console.log(`hello js user, ${this.name}`);
   }
 
  console.log(JsUser.greeting());
  console.log(JsUser.greetingtwo());
  
 
 
 





