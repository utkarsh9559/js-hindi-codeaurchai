const marvel_heros = ["ironman" , "spiderman" , "thor"];
const dc_heros = ["superman" , "batman" , "flash"];
//marvel_heros.push(dc_heros);//addd array of element into a array
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);
//   const allheros = marvel_heros.concat(dc_heros)//add elements int a single array
//  console.log(allheros);
 
const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);

 const another_array = [1,2,3 ,[4,5,6] ,7 ,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)//gives in a single array
console.log(real_another_array);

console.log(Array.isArray("utkarsh"));//gives true/false 
console.log(Array.from("utkarsh"));//converts into array
console.log(Array.from({name:"utkarsh"}));//gives empty array 

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1 , score2 , score3));//return new array from set of elements

