//ARRAYS
const myArr = [0,1,2,3,4,5]

const Arr2 = new Array("numan",'raza',"ziyai")
console.log(myArr);
console.log(Arr2);

console.log(myArr[5]);
myArr.push(6)
console.log(myArr);
myArr.unshift(9)
console.log(myArr);
console.log(myArr.includes(9));



// SLICE AND SPLICE 
console.log("A",myArr);


const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B" , myn1);


const myn2 = myArr.splice(1,3)
console.log(myn2);
console.log("C" , myn2);