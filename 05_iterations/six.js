const coding =["python" , "ruby" ,"java"]


const values = coding.forEach((item) => {  //hr ek values ko item bol skte hh
    console.log(item);
    return item   // forEach does not return any values
})
console.log(values);
