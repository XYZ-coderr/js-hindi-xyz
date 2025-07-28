// Immediately Invoked Function expressions
(function chai(){   // yeh hh named iife kyun ki yahan fxn ko le kk describe kiya hhh 
    console.log(`bd connected`);
    
})(); // used for immediate calling of a fxn ; why iife is used 



(() => {  // normal iife 
    console.log(`DB connected 2`); // arrow se kiye 
    
})();



((name) => {
    console.log(`DB connected 2 ${name}`); // arrow se kiye 
    
})("Raza");