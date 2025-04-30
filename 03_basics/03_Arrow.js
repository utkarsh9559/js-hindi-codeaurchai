//object 
const user = {
    username: "utkarsh",
    price : 9283,

    welcomeMessage: function(){
        
        console.log(`${this.username} , welcome to website`);
        console.log(this);//talks about curr context 

    }
}
//  user.welcomeMessage()
//  user.username = "sam"
//  user.welcomeMessage()

// console.log(this);
// function chai(){
//     console.log(this); 
// }
// chai()

// const chai = function(){
//     let username = "utirk"
//     console.log(this.username);
    
// }
// chai()
const chai = () => {//arrow funtion
    let username = "utirk"
    console.log(this.username);
    
}
//chai()

//   const addtwo = (value1 , value2) => {
//     return value1 + value2;
//   }

  const addtwo = ( value1 , value2) => (value1 + value2) //implicit function 

  console.log(addtwo(3 , 66));
  
  

