let i, initialNumber,message;

do{
    initialNumber = parseInt(window.prompt("Enter a number bigger than 0 (not too big!)")); 
}while(initialNumber<=0 || isNaN(initialNumber));

message = '';
for(i=initialNumber;i>=0;i--){
    message = message + i + "<br>";
}

//window.console.log(message);
window.document.write(message);
