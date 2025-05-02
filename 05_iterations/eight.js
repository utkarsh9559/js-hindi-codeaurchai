const mynumbers = [1,2,3]
// const newtotal = mynumbers.reduce(function (acc , currval) {
//     console.log(`acc:- ${acc}  and currval:- ${currval}`);
    
//     return acc+ currval
// } , 4)
const newtotal = mynumbers.reduce((acc , currval)=> acc+currval, 0) 

console.log(newtotal);
const shopingcart = [
    {
        itemname: "java course",
        price:2900
    },
    {
        itemname: "python",
        price:900
    },
    {
        itemname: "javascript",
        price:2000
    },
    {
        itemname: "data sccience course",
        price:5900
    },
]

const totalprice = shopingcart.reduce((acc , i)=> acc+ i.price , 0)
console.log(totalprice);
