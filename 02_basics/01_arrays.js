//array 

const myArr = [0 , 1 , 2, 3 , 4 ,5]
const array = new Array(1,2,3,4)
// console.log(array[0]);
// //Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)//add element at the start of array 
// myArr.shift()
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(4));

const newArr = myArr.join()//it converts array into string 
// console.log(myArr);
// console.log(typeof newArr);

//slice , splice

console.log("A " , myArr);
 const myn1 = myArr.slice(1,3);// dones not slice last index elemnt like 3rd index in this example
 console.log(myn1);
 console.log("B " , myArr);//print whole array

 console.log("c" , myArr);
 const myn2 = myArr.splice(1,3);//includes lasst index element 
 console.log(myn2);
 console.log("D" , myArr);//only gives remaining element which are not spliced
 
 

