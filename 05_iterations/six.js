//const coding = ["js","ruby","java","python","cpp"]

// const values = coding.forEach((item)=>{
//     //console.log(item);
//     return
    
// } )

// console.log(values);

const mynums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = mynums.filter( (num)=> num > 4 )
// console.log(newNums);

// const newNums = mynums.filter( (num)=>  {
//        return num > 4 
//     } )
// console.log(newNums); // scope alg h curly braces

const newNums = []

mynums.forEach((num) => {
    if(num >4){
        newNums.push(num)
    }
})
console.log(newNums);
