// singleton
//jb literals se declare krte h toh singleton nhi bnta hai
// constructor se declare krne pe banta hai singleton
//Object.create --- constructor se obj
// object literals
const mySym =  Symbol("key1")

const JsUser = {
    name: "Jago",
    "full name": "Jago Baby",
    [mySym]: "mykey1", //to use as symbol in bracket
    age: 23,
    location: "Bangalore",
    email: "abc@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(typeof JsUser[mySym]);

// JsUser.email = "jago@chatgpt.com"
// Object.freeze(JsUser)
// JsUser.email ="bubba@gpt.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello hello");
}
JsUser.greetingTwo = function(){
    console.log(`hello hello, ${this.name}`);
}

//console.log(JsUser.greeting());
JsUser.greeting();
JsUser.greetingTwo();






// key value ka khela hai