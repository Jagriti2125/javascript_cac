//Immediately Invoked Function Expressions (IIFE)


(function chai(){
    console.log(`DB CONNECTED`);
})();

//global scope k pollution se problem hoti hai
//polltuion hatane k liye iife ka use kiya

( (name) => {
    console.log(`connected ${name}`); 
})("jago")

// named iife - -pehla wala
// unnamed iife -- niche wala
// parameter pass
// do iife semicolon sath
