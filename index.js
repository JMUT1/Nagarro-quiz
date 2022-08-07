// 1. Filter the list of inventors for those who were born in the 1500's  DONE  
const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },

  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },

  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },

  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },

  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },

  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },

  { first: "Max", last: "Planck", year: 1858, passed: 1947 },

  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },

  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },

  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },

  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },

  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];

let bornIn = inventors.filter(e => e.year < 1501 )
// console.log(bornIn)
// 1500 century was from 1401 to 1500

// 2. Give us an array of the inventors first and last names

let firstAndLast = inventors.map(item => `${item.first} ${item.last}`)
// console.log(firstAndLast);



// 3. Sort the inventors by birthdate, oldest to youngest    
const sortYears = inventors.sort((a,b)=> a.year - b.year)
// console.log(sortYears)

// 4. How many years did all the inventors live all together?

let calcTwoDates = inventors.map(item => item.passed - item.year);
console.log(calcTwoDates)

let allTogetherDates = calcTwoDates.reduce((d1,d2)=> d1 + d2, 0);

console.log(allTogetherDates);

for (let i = 1; i < 101; i++){
  if (i % 15 == 0) console.log("FIZ BUZZ");
  else if (i % 5 == 0) console.log("FIZZ");
  else if (i % 3 == 0) console.log("BUZZ");
  else console.log(i);
}

var elvisLives = Math.PI > 4 ? "Sip" : "Nop";

console.log(elvisLives)

setTimeout(function(){
  console.log("HELLO")
}, 1000)

function printHello(){
  console.log("HELLO WORLD");
}

setTimeout(printHello, 1000);

let mayorDeEdad = (edad)=>{
  if (edad > 17){
    console.log("Es mayor")
  }
  else{
    console.log("No es")
  }
}

mayorDeEdad(16)