function add() {
  var number1 = document.getElementById("number1").value;
  var number2 = document.getElementById("number2").value;
  if (number1 && number2) {
    var sum = parseInt(number1) + parseInt(number2);
    document.getElementById("res").innerHTML = sum;
  }
}
function sub() {
  var number1 = document.getElementById("number1").value;
  var number2 = document.getElementById("number2").value;
  if (number1 && number2) {
    var sum = parseInt(number1) - parseInt(number2);
    document.getElementById("res").innerHTML = sum;
  }
}
function mul() {
  var number1 = document.getElementById("number1").value;
  var number2 = document.getElementById("number2").value;
  if (number1 && number2) {
    var sum = parseInt(number1) * parseInt(number2);
    document.getElementById("res").innerHTML = sum;
  }
}
function div() {
  var number1 = document.getElementById("number1").value;
  var number2 = document.getElementById("number2").value;
  if (number1 && number2) {
    var sum = parseInt(number1) / parseInt(number2);
    document.getElementById("res").innerHTML = sum;
  }
}
