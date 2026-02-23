//var c = 300
let a = 300
if (true) {
     let a = 10
     const b = 20
     //var c = 30
}
{} // yahi hai scope 

//console.log(a);
//console.log(b);
//console.log(c);

//local scope and global scope

function one(){
    const username = "jago"

    function two(){
        const website = "yt"
        console.log(username);
    }
    //console.log(website);
    
   two()

}

//one()

if(true) {
    const username = "jago"
    if(username === "jago"){
        const website = " yt"
        //console.log(username + website);
    }
    //console.log(website);
    
}

//console.log(username);


//+++++++++++ interesting +++++++++++++

console.log(addone(5))
function addone(num){ // function
    return num +1
}


// addTwo(5) //hoisting 
const addTwo = function(num){ // expression
    return num +2
}

