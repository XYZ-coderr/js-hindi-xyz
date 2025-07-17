const accountID = 144553
let accountEmail = "raza@gmail.com"
var password = "ziyai"
accountCity = "Jamshedpur"
let accountState;

 //accountID = 2 // 

console.log(accountID);
/*
Prefer not using var because of issue in functional scope and block scope 
*/
console.log([accountID,accountEmail,password]);
console.table([accountID,accountEmail,password,accountCity,accountState]);


