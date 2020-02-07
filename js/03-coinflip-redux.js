let coinFlip;
let i;
for(i=0;i<10;i++){
    coinFlip = Math.round(Math.random());
    if(!coinFlip){
        window.console.log("Heads");
    }else{
        window.console.log("Tails");
    }
}
