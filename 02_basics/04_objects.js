//const tinderUser = new Object() // yeh object declare krne ka tareeka hh ; yeh ek singleton object hh 
//console.log(tinderUser);
const TinderUser = {} //  yeh object declare krne ka tareeka hh ;yeh ek non singleton object hh  
TinderUser.id = "123abc"
TinderUser.name = "NUman"
TinderUser.isLoggedin = false
console.log(TinderUser);
console.log(Object.keys(TinderUser));

const regularUser = {
    email: "raxagmail.com",
    fullname:{
        userName : {
            firstname:"numan",
            lastname:"raza"
        }
    }
}
console.log(regularUser.fullname.userName.lastname);


const obj1 = {1: "a" , 2:"b"}
const obj2 = {3: "a" , 4:"b"}

//const obj3 = {obj1 , obj2} // yeh bhi tareeka hh aadd krne ka 2 objects ko 
//const obj3 = Object.assign({} , obj1,obj2) // yeh shi tareeka hh 
const obj3 = {...obj1,...obj2}// zyada use hone waala tareeka
console.log(obj3);

//**********************DESTRUCTURING***************************************** */

const course={
    coursename : "js",
    price:"99", 
    courseInstructor :"NUman"
}

const {courseInstructor} = course // extract kiye courseInstructor cousrse object se 
console.log(courseInstructor);


//api hat k json hogya hh 
//{//Json , keys bhi string hoti hh or values bhi string 
    //"name": "hitseh",
   // "coursename": "js in hindi "
    //"price": "free"

//}