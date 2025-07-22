const marvel_heroes = ["thor" , "ironman" , "spiderman"]
const dc_heroes =["superman ", "flash","batman"]

//marvel_heroes.push(dc_heroes)
//console.log(marvel_heroes);

//const allHeroes = marvel_heroes.concat(dc_heroes)
//console.log(allHeroes);

const allHeroes =  [...marvel_heroes,...dc_heroes] // ek or tareeka array add krna ja 
console.log(allHeroes);

console.log(Array.from("Numan Raza Ziyai"))