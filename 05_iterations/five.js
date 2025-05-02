const coding = ["js" , "ruby" , "java" , "python" , "cpp"]

// coding.forEach(function (i){
//     console.log(i);
    
// })

// coding.forEach((i) =>{//arrow function 
//  console.log(i);
 
// })

// function printMe(item){
//     console.log(item); //directly print thee function 
    
// }
// coding.forEach(printMe)

// coding.forEach( (item , index , arr)=> {
//       console.log(item , index , arr);
      
// })

const myCoding = [ 
    {
    langauageName: "javascript",
    languagefile: "js"
} ,
    {
    langauageName: "java",
    languagefile: "java"
} ,
    {
    langauageName: "python",
    languagefile: "py"
} ,
]

myCoding.forEach( (i)=> {
  console.log(i.langauageName);
  
})