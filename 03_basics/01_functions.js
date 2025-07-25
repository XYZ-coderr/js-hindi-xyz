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
