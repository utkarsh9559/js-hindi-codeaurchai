class User {
    constructor(email , password){
        this.email = email;
        this.password = password
    }
    get email(){
        return this._email.toUpperCase()
    }


    get password(){
        return this._password.toUpperCase()

    }
 set email(value){
        this._email = value
    }
    set password(value){
        this._password = value
    }
   
}

const utkarsh = new User("utkarsh@12.ai" , "abc")
;console.log(utkarsh.password)
;console.log(utkarsh.email)
