let futureValue = 0;
let investment = 0;
let rate = 0;
let years = 0;
let i;

do {
  investment = parseFloat(window.prompt("Enter investment amount as xxxx.xx"));
  if (isNaN(investment) || investment <= 0) {
    window.alert("Please enter a valid and positive investment amount");
  }
} while (isNaN(investment) || investment <= 0);

do {
  rate = parseFloat(window.prompt("Enter interest rate as xx.x"));
  if (isNaN(rate) || rate < 0 || rate > 6) {
    window.alert(
      "The rate should be numeric and between 0 (0.0%) and 6 (6.0%)\nYou can use decimals: ie. enter 4.5 (for 4.5% rate)"
    );
  }
} while (isNaN(rate) || rate < 0 || rate > 6);

do {
  years = parseInt(window.prompt("Enter number of years"));
  if (isNaN(years) || years < 1 || years > 30) {
    window.alert("The number of years should be numeric and between 1 and 30");
  }
} while (isNaN(years) || years < 1 || years > 30);

futureValue = investment;
for (i = 1; i <= years; i++) {
  futureValue = futureValue + (futureValue * rate) / 100;
}
window.document.write("Investment amout: $ " + investment + "<br>");
window.document.write("Interest rate: " + rate + "%<br>");
window.document.write("Years: " + years + "<br>");
window.document.write("Future Value: $ " + futureValue.toFixed(2));
