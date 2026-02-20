const name = "jagriti"
const repoCount = 50

//console.log(name + repoCount + " Value");
// outdated method 

// use backticks instead
 console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
 // string interpolation

 const gameName = new String ('jagriitii-baby-here')
 //object bana diya string object 
 // console meh daalke check kro toh dikhega
 // string k har ele ko index de diya hai
 // key value pair meh aata hai
 // methods boht sare hai available for us to use

 console.log(gameName[0]);
 console.log(gameName.__proto__);

 console.log(gameName.length);
 console.log(gameName.toUpperCase());
 // original nhi hui hai 
 //because strings are immutable/primitive datatype it takes the copy not the reference
 console.log(gameName.charAt(2));
 console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4)
console.log(newString);
//last jo index mentioned hai woh include nhi hota hai

const anotherString = gameName.slice(-9,-1)
console.log(anotherString);
//(-,+) not working only the above syntax working 
// both neg then slice or both + then slice

const newStringOne = "   jago    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://jago.com/jago%20baby"

console.log(url.replace('%20', '-'))

console.log(url.includes('jago'))

console.log(gameName.split('-'));
//creates an array and splits the word based on
// separator 3 array elements from 1 word







