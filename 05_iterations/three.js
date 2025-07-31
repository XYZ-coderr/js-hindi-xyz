// for of loop 

const arr = [ 1 , 2 , 3 , 4 , 5]
for (const num  of arr) {
    console.log(num);
    
}


const greetings = "HELLO WORLD"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
    
}


//Maps

const map = new Map()   // object 
map.set('IN' , "INDIA")
map.set('UN' , "USA")
map.set('IN' , "INDIA") // maps are known for their unique values ,no double entries
map.set('FR' , "FRANCE")




console.log(map);


for (const key  of map) { // for of loop 
    console.log(key);
    
}
for (const [key , value ] of map) {
    console.log(key , " ->" ,value);
    
}