let coinFlip;
do{
    coinFlip = Math.round(Math.random());
    if(!coinFlip){
        window.console.log("Heads");
    }else{
        window.console.log("Tails");
    }
}while(!coinFlip);



