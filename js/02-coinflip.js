
// // STEP 1: Comparing if less than a number
// let coinFlip = Math.random();
// window.console.log(coinFlip);

// let choice = window.prompt("Heads or Tails?\nType h for heads or t for tails");

// if(coinFlip < 0.5) { //Heads
//     if (choice === 'h') {
//         window.alert("The flip was heads and you chose heads...you win!");
//     }else{
//         window.alert("The flip was heads but you chose tails...you lose!");
//     }
// }else{ //Tails
//     if (choice === 'h') {
//         window.alert("The flip was tails but you chose heads...you lose!");
//     }else{
//         window.alert("The flip was tails and you chose tails...you win!");
//     }
// }


//STEP 2: Geting a solid whole number on the coin flip.
let coinFlip = Math.round(Math.random());
window.console.log(coinFlip);

let choice = window.prompt("Heads or Tails?\nType h for heads or t for tails");

if(coinFlip === 0) { //Heads
    if (choice === 'h') {
        window.alert("The flip was heads and you chose heads...you win!");
    }else{
        window.alert("The flip was heads but you chose tails...you lose!");
    }
}else{ //Tails
    if (choice === 'h') {
        window.alert("The flip was tails but you chose heads...you lose!");
    }else{
        window.alert("The flip was tails and you chose tails...you win!");
    }
}



