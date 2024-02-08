// Create a game of Rock/Paper/Scissors

/*
    Rock = 0 > Scissors = 1
    Scissors = 1 > Paper = 2
    Paper = 2 > Rock = 0
*/

const player = 2;
let computer = Math.floor(Math.random() * 3);
let playAns = null;
let compAns = null;

if (player === 0){
    playAns = "Rock";
}
else if (player === 1){
    playAns = "Scissors";
}
else if (player === 2){
    playAns = "Paper";
}
else{
    playAns = "Wrong Entry";
}

if (computer === 0){
    compAns = "Rock";
}
else if (computer === 1){
    compAns = "Scissors";
}
else if (computer === 2){
    compAns = "Paper";
}
else{
    compAns = "Wrong Entry";
}

console.log ("Player picked:", playAns);
console.log ("Computer picked:", compAns);

if (player !== computer){
    if ((player === 0 && computer === 1)||(player === 1 && computer === 2)||(player === 2 && computer === 0)){
        console.log("The player won!");
    }
    else if ((computer === 0 && player === 1)||(computer === 1 && player === 2)||(computer === 2 && player === 0)) {
        console.log("The computer won!");
    }
    else {
        console.log("Error, Try Again")
    }
} 
else {
    console.log("Draw");
}