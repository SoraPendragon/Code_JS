// Convert an integrer into its equivalent binary Number

const myNumber = 30;
let binary = "";

// With "for" loop
for (let i = myNumber; i >= 1 ; i = Math.floor(i/2)) {
    if (i % 2 == 0) {
      binary = "0" + binary
    } else {
      binary = "1" + binary;
    }
    console.log(binary);
  }