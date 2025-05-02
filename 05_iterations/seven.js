const mynumbers = [1 , 2, 3,4,5 ,6 ,7 ,8 , 9 , 10]

//const newnumber = mynumbers.map((i)=> i+10)
const newnumber = mynumbers.map((i) => i*10).map((i)=>i+1).filter((i)=> i>=41)
console.log(newnumber);
