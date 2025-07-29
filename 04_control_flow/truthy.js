const userEmail = "raza@.com"
if(userEmail){
    console.log("Got mail");
    
}
else{
    console.log("not found");
    
}
// Nullish coalescing operator (??) : null and undefined 
let val1;
val1 = 5 ?? 10
val1 = null ?? 10

console.log(val1);

// Terniary Operator 
//condition ? true : false
const iceTea =  100
iceTea <= 80 ? console.log("less than 80") : console.log("more than 80");

