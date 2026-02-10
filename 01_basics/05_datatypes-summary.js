// Primitive 

// 7 types : String , Number , Boolean , null , undefined , Symbol , BigInt

// const score = 100
// const scoreValue = 100.3

// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;

// const id = Symbol('123')
// const anotherId = Symbol('123')

// //console.log(id == anotherId);

// const bigNumber = 98724284521478129n



// // Reference (Non Primitive)

// // Array , Objects , Functions

// const heros = ["shaktiman" , "naagraj" , "doga"];
// let myObj = {
//     name: "jagriti",
//     age: 23,
// }

// const myFunction = function(){
//   console.log("hello hello");   
// }

// console.log( typeof bigNumber);


// ***********************


// Stack(primitive) , Heap (non - primitive)

let myYoutubename = "jago jots hehe"

let anothername = myYoutubename
anothername = "jagriitii"

console.log(myYoutubename);
console.log(anothername);

let user1={
  email: "user@com",
  upi: "user@ybl",
}

let user2 = user1

user2.email = "jago@com"

console.log(user1.email);
console.log(user2.email);

// stack - copy 
// heap - reference (original)
