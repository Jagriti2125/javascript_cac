// array

const myArr = [0, 1, 2, 3, 4, 5]
//array in js is resizable and can be mixed

//console.log(myArr[1]);
// shallow copy and deep copy
// array copy operation meh js create shallow copies
//shallow copy - share same reference
// change in any changes all
// deep copy -  dont share

// const myHeros = ["aman", "motu", "baa"]
// const myArr2 = new Array(1, 2, 3, 4)

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

//myArr.unshift(9)
//myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));

// const newArr = myArr.join()

// console.log(myArr);
// console.log(typeof newArr);

//slice , splice

console.log("A", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1, 3)
console.log("C",myArr);

console.log(myn2);

//diff btw splice and slice
// slice dont manipulates in original array
//splice changes the original arr 
// splice + new arr = org arr


 
