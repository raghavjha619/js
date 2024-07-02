const accountId = "144004"
let accountName = "Raghav"
var accountPassword = "12345"
accountState = "Fluid"
let accountUser
console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountPassword, accountState, accountUser, accountName])