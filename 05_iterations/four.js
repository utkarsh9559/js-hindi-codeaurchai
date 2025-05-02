const myObject  = {
    js: 'javascript',
    cpp: 'c++',
    rb: "ruby",
    swift: "swift by apple"
}
 for (const key in myObject) {
    
        console.log(` ${key} shortcut is for ${myObject[key]}`);
        
    }
   //diff btw for of and for in is if we print key in for of then it will directly gives the value 
   //but in for in it gives the index of value like normal for loop 
//   const object = ["js" , "py" , "cpp" , "java"]
//    for (const key in object) {
    
//         console.log(object[key]);       
//     }
//     const map = new Map()
// map.set('In' , " india")
// map.set('USA' , 'united state of america ')
// map.set('fr' , "france ")
// map.set('In' , "india")
//    for (const key in map) { //it is not iterable
//     console.log(key);
    
//    }