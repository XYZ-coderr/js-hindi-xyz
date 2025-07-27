let a = 10
const b = 20
var c = 30
console.log(a);
console.log(b);
console.log(c);
 // {} = scope 
 
 function one(){
    const username = "NUman"
    
    function two(){
        const website = "youtube"
        console.log(username);
        
    }
    //console.log(website);

    two() // execute krana zruri hh tbhi function one ka value print hoga 
    
 }
 one()

 //+++++++++++++INTERESTING

 function addone(num){
    return num + 1
 }
 console.log(addone(5));
 

