//const coding = [ " js " , "python" , "java" , "cpp" , "ruby"]

//  const values = coding.forEach((i)=> {
//    // console.log(i);
//     return i;
// })
// console.log(values);

 const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums =  myNums.filter( (num) => {
//    return num > 4//imp
// })//if you are using scope {} , must return the funtion 

const newNums = []
myNums.filter( (i) => {
    if(i>4){
        newNums.push(i);
    }
})
console.log(newNums);
 const books = [ 
    {title: 'Book one' , genre: 'fiction' , publish: 1981 , edition:2004},
    {title: 'Book two' , genre:  'non-fiction' , publish: 1991 , edition:2008},
    {title: 'Book three' , genre: 'history' , publish: 1821 , edition:2014},
    {title: 'Book four' , genre: 'non-fiction' , publish: 1988 , edition:2024},
    {title: 'Book five' , genre: 'fiction' , publish: 1982 , edition:2034},
    {title: 'Book six' , genre: 'fiction' , publish: 1995, edition:2054},
    {title: 'Book seven' , genre: 'history' , publish: 1998 , edition:2044},
    {title: 'Book eight' , genre: 'non-fiction' , publish: 1993 , edition:2064},
    {title: 'Book nine' , genre: 'history' , publish: 1984 , edition:2094},
 ];
 let userbook = books.filter((i)=> i.genre === 'history')

//console.log(userbook);

 userbook = books.filter ( (i) => { return i.publish >= 1980 && i.genre === 'history'} )
console.log(userbook);
