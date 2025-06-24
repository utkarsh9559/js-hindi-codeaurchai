// let myName = "utkarsh    "

// console.log(myName.truelength);

let myHeros = ["thor" , "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
        
    }
}
Object.prototype.utkarsh = function(){
    console.log(`utkarsh is present in all objects`);   
}

Array.prototype.heyutkarsh = function(){
    console.log(`utkarsh says hello `);
    
}

//heroPower.utkarsh()

myHeros.utkarsh()
myHeros.heyutkarsh();
// heroPower.heyutkarsh()

//inheritance 
const user = {
    name: " coffee",
    email: "@google"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TAsupport = {
    makeAssignment: 'js assingment',
  fulltime: true,
  __proto__:TeachingSupport
}

// Teacher.__proto__ = user;

// modern syntex

Object.setPrototypeOf(TeachingSupport , Teacher)

let anotherusername = "chaiaurcode    "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`true length is: ${this.trim().length}`);
    
    
}
anotherusername.trueLength()
"utkarsh".trueLength()
"icetea".trueLength()