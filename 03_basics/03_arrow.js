const user ={
    username: "jago",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "baby"
// user.welcomeMessage()

//console.log(this);

// function chai(){
//     let username ="jago"
//     console.log(this.username);
    
// }
// chai()
// object k andar this kaam krta hai
// function k andar undefined hoga kaam nhi krta this

const chai = () => {
    let username = "jago"
    console.log(this);
    
}
//chai()

// const addTwo = (num1,num2) => {
//     return num1+ num2 //explicit
// }
// const addTwo = (num1,num2) => num1+ num2
//implicit return
// const addTwo = (num1, num2) =>(num1 + num2)

//console.log(addTwo(3,5))
// to return object
const addTwo =(num1,num2) => ({username:"jago"})

