 //const tinderuser = new Object()
 const tinderuser = {}
 tinderuser.id = "123abc"
 tinderuser.name = "mohan"
 tinderuser.isLoggedIn = false;

 //console.log(tinderuser);

 const regularuser = {
    email: "hrffger@google.com",
    fullname: {
        name: "utkarsh singh",
        userfullname: {
            firstname : "utkarsh",
            lastname: " singh"
        }

    }
 }
 
 console.log(regularuser.fullname);
  const obj1 = {1:"a" , 2:"b"}
  const obj2 = {3:"c" , 4:"d"}

//   const obj3 = { obj1 , obj2}
//   console.log(obj3);
//const obj3 = Object.assign( {} , obj1 , obj2)
const obj3 = { ...obj1 , ...obj2}
console.log(obj3);
//objects in array 
const user = [
    {
        id: "3",
        email: "utkarsh@google.com"
    }
    ,
    {
        id1: "5",
        email: "uth@google.com"
    }
    ,
    {
        id2 : "7",
        email: "karsh@google.com"
    }
]
//console.log(user);
user[1].email
  console.log(tinderuser);
  console.log(Object.keys(tinderuser));//it gives output in array
  console.log(Object.values(tinderuser));
  console.log(Object.entries(tinderuser));//it gives out in key and value formate in array 

  console.log(tinderuser.hasOwnProperty('isLoggedIn'));
  
  const course = {
    coursename: "javascript in hindi",
    price: " 219483",
    courseteacher: "khfspwnf"
  }
const {courseteacher : teacher} = course
console.log(teacher);

// const navbar = ({company}) => {

// }
// navbar(company = "yash")
 {
    "name":"utkarsh",
    "coursename" :"js in hindi",//json formate 

 } 
  
 [
    {},
    {},
    {}
 ]
 