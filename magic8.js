//Magic 8 Ball

let quest = "Will I find a better Job in the future?";
let ans = null;

let a = Math.floor(Math.random() * 9) +1;

if (a === 9){
    ans = "Yes - definitely.";
}
else if (a === 8){
    ans = "It is decidedly so.";
}
else if (a === 7){
    ans = "Without a Doubt.";
}
else if (a === 6){
    ans = "Reply hazy, try again.";
}
else if (a === 5){
    ans = "Ask again later.";
}
else if (a === 4){
    ans = "Better not to tell you now.";
}
else if (a === 3){
    ans = "My sources say no.";
}
else if (a === 2){
    ans = "Outlook not so good.";
}
else if (a === 1){
    ans = "Very doubtful";
}
else {
    ans = "Error";
}

console.log("Question :", quest);

console.log("Magic 8 Ball:", ans);

console.log (a);