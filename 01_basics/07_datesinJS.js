//****************************DATES******************** */
let myDate = new Date()
console.log(myDate.toDateString())
console.log(myDate.toISOString())

console.log(typeof myDate)


let mycreateDate = new Date(2025,7,22)
console.log(mycreateDate.toDateString())

let myTimeStamp = Date.now()
console.log(myTimeStamp); // TIME KO MILISECONDS M BTATA HH 
console.log(Math.floor(Date.now()/1000)); //converted in seconds 

let newDate = new Date()
console.log(newDate.getHours());
