const myObject = {     // object m for of loop nhi lgta hh 
    js : 'javascript',    // key sb left side m likh a hh eg js cpp rb or right side wala value hh 
    cpp : 'c++',
    rb : 'ruby'
}
//using for in loop for object 
for (const key in myObject) {
  // console.log(key); // for key print 
   console.log(`${key} shortcut is for ${myObject[key]}`);
   
   
}