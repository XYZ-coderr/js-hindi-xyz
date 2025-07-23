// singleton ; literals ki tarah declare krne m singleton nhi bnta hh 

Object.create // object create huwa constructor method k through ; isi k andr sinleton bnta hh

// object literals 
const JsUser={
    name : "Numan",
    age : 21,
    location : "Jamshedpur",
    email : "rzaz@gmail.com",
    isLoggedIn : false,
}
console.log(JsUser.email);
console.log(JsUser["email"]); // ek or tareeka print krne ka 

JsUser.email = "numan@gmail.com"
//Object.freeze(JsUser) // no more changes can be done as the object is freezed
JsUser.email = "khan@gmail.com"
console.log(JsUser);
JsUser.greeting = function(){
    console.log(`Hello Js user , ${this.name}`);
}
console.log(JsUser.greeting());
