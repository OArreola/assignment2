
// // STEP 1: Comparing if less than a number
// let coinFlip = Math.random();
// window.console.log(coinFlip);

// let choice = window.prompt("Heads or Tails? Choose one...\nType h for heads or t for tails");

// //Lets define:
// //Random number between 0 and 0.5 identified as "Heads"
// //Random number between 0.5 and 1 identified as "Tails"

// if(coinFlip < 0.5) { //Heads
//     if ((choice === 'h') || (choice === 'H')) {
//         window.alert("The flip was heads and you chose heads...you win!");
//     }else if ((choice === 't') || (choice === 'T')){
//         window.alert("The flip was heads but you chose tails...you lose!");
//     }else{
//         window.alert("You didn't type h or t...");
//     }
// }else{ //Tails
//     if ((choice === 'h') || (choice === 'H')) {
//         window.alert("The flip was tails but you chose heads...you lose!");
//     }else if ((choice === 't') || (choice === 'T')){
//         window.alert("The flip was tails and you chose tails...you win!");
//     }else{
//         window.alert("You didn't type h or t...");
//     }
// }

//STEP 2: Geting a solid whole number on the coin flip.
let coinFlip = Math.round(Math.random());
window.console.log(coinFlip);

//Lets define:
//Random number equals 0, coinflip identified as "Heads"
//Random number equals 1, coinflip identified as "Tails"

let choice = window.prompt("Heads or Tails?\nType h for heads or t for tails");

if(!coinFlip) { //Heads
    if ((choice === 'h') || (choice === 'H')) {
        window.alert("The flip was heads and you chose heads...you win!");
    }else if ((choice === 't') || (choice === 'T')){
        window.alert("The flip was heads but you chose tails...you lose!");
    }else{
        window.alert("You didn't type h or t...");
    }
}else{ //Tails
    if ((choice === 'h') || (choice === 'H')) {
        window.alert("The flip was tails but you chose heads...you lose!");
    }else if ((choice === 't') || (choice === 'T')){
        window.alert("The flip was tails and you chose tails...you win!");
    }else{
        window.alert("You didn't type h or t...");
    }
}

