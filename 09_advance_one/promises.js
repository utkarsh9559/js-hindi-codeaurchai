const promiseOne = new Promise(function(resolve , reject){
    //do an async task
    //DB calls , cryptography , network 
    setTimeout(function(){
        console.log('async task is complete');
        
    }, 1000)
})

promiseOne.then(function(){
    console.log("prmoise consumed");
    
})

new Promise(function(resolve , reject){
    setTimeout(function(){
    console.log("async task 2");
    resolve()
    
    },1000)
}).then(function(){
    console.log("async 2 resolve");
    
})

const promiseThree = new Promise(function(resolve , reject){
    setTimeout(function(){
         resolve({username: "chai" , email: "chai@example.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
    
})

const promiseFour = new Promise(function(resolve , reject ){
    setTimeout(function(){
        let error = true 
        if(!error){
            resolve({username: "utkarsh" , password: "123"})
        }
        else{
            reject('ERROR: Something went wrong')
        }

    } , 1000)
})

promiseFour.then((user) => {
   console.log(user);
    return user.username
    
}).then((username)=> {
  console.log(username);
  
}).catch(function(error){
    console.log(error);
    
}).finally(()=> console.log("the promise is either resolve or rejected")
)