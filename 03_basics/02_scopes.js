 //var c = 300
 let a = 200
 if(true){
    let a = 10
    const b = 20 
     c = 30
     // console.log("inner:", a);
     
 }
//console.log(a);
//console.log(b);
//console.log(c);

function one(){
    const username = "oneplus"
    function two(){
        const id = "34543"
        const server = "webserver"
        console.log(username);
        
    }
    //console.log(id)//ou tside the loop 

    two()
}
one()

if(true){
    const username = "utkarsh"
    if(username === "utkarsh"){
        const website = " youtube"
        console.log(username + website);    
    }
   // console.log(website);
    
}

// ++++++++++++++++++intresting+++++++++++++

//console.log(addone(5))// it will run becaucse it is called by a funtion

function addone(value){
    return value +1 
}

 //console.log(addtwo(5));//it will not run becuase we are stroing the funtion into some const and we are trying to print it before funtion storing 
 
const addtwo = function(value){
    return value + 2
}
