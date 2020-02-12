let miles,
  gallons,
  mpg,
  again = "y";

window.document.write("Welcome to the MPG App" + "<br>");
do {
  miles = parseFloat(window.prompt("Enter miles driven: "));
  gallons = parseFloat(window.prompt("Enter size of tank in gallons: "));
  if (!isNaN(miles) && miles > 0 && !isNaN(gallons) && gallons > 0) {
    mpg = miles / gallons;
    window.document.write("Miles per gallon: " + parseInt(mpg) + "<br>");
  } else {
    window.alert("One or both entries are invalid.");
  }
  do {
    again = window.prompt("Repeat entry? (y/n)");
  } while (again != "y" && again != "n");
} while (again === "y");

window.document.write("The application has terminated.");
