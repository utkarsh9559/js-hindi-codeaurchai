const user  = {
    username: "utkarsh",
    logincount: 8 ,
    signedIn: true ,

    getUserDetails: function(){
        //console.log("got user details from database");
      // console.log(`Username: ${this.username}`);
       console.log(this);
       
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());

// const promiseOne = new Promise()
// const date = new Date()

function User(username , logincount , isLoggedIn){
    this.username = username;
    this.logincount =logincount;
    this.isLoggedIn =isLoggedIn

    return this
}

const userOne = User("utkarsh" , 12 , true)
console.log(userOne);
