// function addTwoNos(number1 , number2) //num 1 or 2 parameters hh 
// {
//     console.log(number1 + number2);
    
// }
// addTwoNos( 3 , 4 ) // call kiye function ko , arguments bolte hh 



function addTwoNos(number1 , number2) //num 1 or 2 parameters hh 
{
   let result =number1+number2;
   return result
    
}
const result = addTwoNos(3,5)
console.log("Result:" , result);



function loginUser(usernamre){
    if(usernamre === undefined){
        console.log("Please enter a username");
        return

    }
    return`${usernamre} just logged in`
}
// const a = loginUser("Numan")
// console.log(a);
console.log(loginUser("Numan"));



//shopping interface types k liye 
function calculateCartPrice(...num1){ // dots isliye diye taaki joh values aara hh woh array m store ho jaaye 
return num1
}
console.log(calculateCartPrice(2 , 200 , 65 , 55));

const user = {
    usernamre:"raza",
    price:58
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.usernamre} and price is ${anyObject.price}`);
    
}
handleObject(user)

const myNewArray = [200 ,400,50,600]

function returnSecondValue(getArray){
  return getArray[2]
}
console.log(returnSecondValue(myNewArray));
