// PRIMITIVE DATA TYPES

// 7 types : (Call by values )String , Number , Boolean , null , undefined , symbol , BigInt


// REFERNCE TYPE YA NON PRIMITIVE DATA TYPES

// Array , objects , functions 
let muObj = // tareeka hh object likhne ka
{
    name : "Numan",
    age : 20,
}

const myFunction = function(){    // function likhne ka tareeka 

    console.log("Hello world");
    

}
console.log(typeof myFunction);




//*********************************** */
//MEMORY 
//STACK MEMORY (PRIMITIVE M AATA HH ) = ISKA MTLB JO BHI VARIABLE DECLARE KIYA USKA COPY MILTA HH 
// HEAP MEMORY (NON PRIMITIVE) = ISKA MTLB JO BHI VARIABLE DECLARE KIYA USKA REFRENCE  MILTA HH
let myname = "Numan"


let anothername = myname
anothername = "Raza"

console.log(myname);
console.log(anothername);

let user1 ={
    email: "raza@gmail.com",
    upi:"usser@123",
}
let user2 = user1

user2.email ="numan@gmail.com"
console.log(user1.email);
console.log(user2.email);