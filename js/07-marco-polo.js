let i,found,message;

for(i=1;i<=100;i++){
    message = '';
    found = false; 
    if(i%3 === 0){
        found = true;
        message = "Marco! ";
    }
    if(i%5 === 0){
        found = true;
        message += "Polo!";
    }
    if(!found){
        message = i;
    }
    message += "<br>";
    //window.console.log(message);
    window.document.write(message);
}


