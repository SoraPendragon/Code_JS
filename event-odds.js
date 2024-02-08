for (let i = 1; i < 51; i++){
    if (i % 2 == 1){     // <- for odd number 
        continue;        // for even number -> i % 2 == 0
    }
    else if (i === 42){
        break;
    }
    else { 
    console.log(i);
    }
}