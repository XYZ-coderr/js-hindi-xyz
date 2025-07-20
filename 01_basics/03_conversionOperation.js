// ****************************** Conversion ***********************
let score = "33"//ek variable hh 
let zz = "Numan"
console.log(typeof score);
console.log(typeof (score)); // yeh method tareeka hh likhne ka 

let valueNumber = Number(score) // converted the string in number
console.log(typeof valueNumber);
console.log( valueNumber);
let valuennn = Number(zz) // converted the string in number ; but it dose not converted as it is in string
console.log(valuennn);

let isLoggedIn = 1
let booleanISLOggedIn = Boolean(isLoggedIn) // convertd in boolean fromm number
console.log(booleanISLOggedIn);

// 1 likhne pr true agr zero toh false dega 
// Numan likhne pr woh true dera or khaali rkhne se false dera 


let someNumber = 33
let StringNumber = String(someNumber)
console.log(StringNumber);
console.log(typeof StringNumber); // string m covert ho chuka h pr 33 number form m hi print huwa hh 

//******************* operations ************** */
let value = 3
let negValue = -value
console.log(negValue);
console.log(2**3); // 2^3

let str1 ="Numan"
let str2 = "Raza"
let str3 = str1 + str2
console.log(str3);
console.log("1" + 2);
console.log(1 + "2");
console.log("1" + "2");
console.log("1" + 2 +2); // string phle aaya isliye string form m saara values utaar diya 
console.log( 1 + 2 +"2"); // number phle aaya isliye phle number form me rkha add kiya phir string k sth joda 

let gameCounter = 100
gameCounter++
console.log(gameCounter);



