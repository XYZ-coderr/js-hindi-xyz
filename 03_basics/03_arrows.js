const user = {//object hh 
    username : "raza",
    price : 88,
    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        
    }

}
user.welcomeMessage()


// ARROW 
const chai = () =>{
    let name = "ziyai"
    console.log(this);
    
}
chai()

// const addTwo = (num1 , num2) => { // syntax for arrows
//     return num1 + num2 
// }
// console.log(addTwo(3 , 4 ));

//implicit way ; no need to take scopes and return 
// const addTwo = (num1 , num2) => num1 + num2
   
//  console.log(addTwo(3 , 4 ));


 // return krna hoga to isko use krna hoga {} ; or nhi return krna hh toh () idko use kren
 // ex object ko return krna hh bina { } iske 
 const addTwo = (num1 , num2) => ({name:"ziyai"})
   
 console.log(addTwo(3 , 4 ));



