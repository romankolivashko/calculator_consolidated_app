// Business logic:
let number1;
let number2;
function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  return number1 / number2;
}


// Business logic not included because it will remain the same.

$(document).ready(function() {
  $("form#calculator").submit(function() {
    event.preventDefault();
    const number1 = parseInt($("#input1").val());
    const number2 = parseInt($("#input2").val());
    const operator = $("input:radio[name=operator]:checked").val();
    console.log("1st number: " + number1);  // for debugging
    console.log("2nd number: " + number2);  // for debugging
    console.log("operator: " + operator);  // for debugging
    const result = add(number1, number2);
    $("#output").text(result);
  });
});