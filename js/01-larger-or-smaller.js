let firstNumber = window.prompt("Enter a number:");
let secondNumber = window.prompt("Enter another number:");

if(firstNumber > secondNumber) {
    window.document.write("The largest of those two numbers is: " + firstNumber);
}else if (firstNumber < secondNumber) {
    window.document.write("The largest of those two numbers is: " + secondNumber);
}else{
    window.document.write("Both numbers are equal");
}

