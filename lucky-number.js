const luckyNumber = 3;
let guess = Math.floor(Math.random() * 10) + 1;

while (guess !== luckyNumber){
    console.log("Nope, It isn't ", guess);
    guess = Math.floor(Math.random() * 10) + 1;
}

console.log("My Lucky number is", luckyNumber);