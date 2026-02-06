const accountId = 144553
let accountEmail = "jagriti@google.com"
var accountPassword = "12345"
accountCity = "Bangalore"
let accountState;
// accountId = 2 // not allowed

accountEmail = "abj@c.com"
accountPassword = "21212121"
accountCity ="Ranchi"

console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
