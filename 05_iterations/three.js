// for of loop
//["" , "" , "" ]
// [{} , { } , { }]

const arr = [ 1 , 2, 3, 4, 5, 6]
for (const i of arr) {
    console.log(i);
    
}

const greetings = "hello wworld!"
for (const i of greetings) {
    console.log(`each charr is ${i}`);
    
}
//Maps :- its a object which hold the key vaalue pair 
    // it remember the order in which u are inseting 
//only store unique values , no repetation 
const map = new Map()
map.set('In' , " india")
map.set('USA' , 'united state of america ')
map.set('fr' , "france ")
map.set('In' , "india")

console.log(map);
 
for (const [key , value] of map) {
    console.log(key , ':-' , value);   
}

// const myObject = {
//     'game1': "NFS",
//     'game2': "spiderman"
// }

// for (const [key , value] of myObject) {
//     console.log(key , ':-' , value);
    
// }
