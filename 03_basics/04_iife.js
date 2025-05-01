// Immediately Invoked Function Expressions(IIFE)
// global scope ke pollution ko hatane ke liye hum iife ka usee karte hain 
(function chai(){
    //named iife
    console.log("jrhfbdjsmncfjh");
    
})();

( (name) => {
    //unnamed iife
    console.log(`erhjfjsdjjfberuyfewjks ${name}`);
    
})("utkarsh")