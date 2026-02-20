// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());

//console.log(typeof myDate);

// let myCreatedDate = new Date(2026, 0 ,23)
// console.log(myCreatedDate.toDateString());
// // month start from 0 in js

// let datetoday = new Date(2026 , 1, 21 , 12 , 45)
// console.log((datetoday.toLocaleString()));

// let ddmmyy = new Date("01-31-2026")
// console.log(ddmmyy.toLocaleString());

// let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(ddmmyy.getTime());

//console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getDate());

newDate.toLocaleString('default',{
    weekday: "long"

})












