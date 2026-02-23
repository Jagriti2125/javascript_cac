function sayMyName(){
    console.log("jago");
}
// sayMyName();

// function addTwoNumbers(number1,number2){ //parameters
//     console.log(number1 + number2 );
// }

// const result = addTwoNumbers(3,5); //arguments

// console.log("Result: ", result);

function addTwoNumbers(number1,number2){ //parameters
    // let result = number1 + number2
    // return result
    
    return number1 + number2 ;
}
const result = addTwoNumbers(3,5); //arguments

// console.log("Result: ", result);

function loginUserMessage(username ="sam"){
    if(username === undefined){ //(!username) other syntax        console.log("please enter a username");
        return 
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage())

function calculateCartPrice(val1,...num1){ //rest operator
    return num1
}

console.log(calculateCartPrice(200,300,400))

const user ={
    username: "jago",
    price: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

//handleObject(user)
handleObject({
    username:"sam",
    price:399
})

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}

//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,500,600,900]));

