// Converter

const cn = 560;
const jp = 2455;
const kr = 3280;
let usd = null;

usd = cn*0.14 + jp*(68/10000) + kr*(76/100000); 

console.log ("What do you have left in yuan?", cn);
console.log ("What do you have left in yen?", jp);
console.log ("What do you have left in won?", kr);

console.log(usd);