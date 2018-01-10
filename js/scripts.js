var add = function (number1, number2){
	return number1 + number2;
}

var subtract = function (number1, number2){
  return number1 - number2;
}

var multiply = function (number1, number2){
  return number1 * number2;
}

var divide = function (number1, number2){
  return number1 / number2;
}

$(document).ready(function() {

	$("button#add").click(function(event) {
		event.preventDefault();
		var number1 = parseInt($("#first").val());
		var number2 = parseInt($("#second").val());
		var result = add(number1, number2);
		$("#output").text(result);
	});
	$("button#subtract").click(function(event) {
		event.preventDefault();
		var number1 = parseInt($("#first").val());
		var number2 = parseInt($("#second").val());
		var result = subtract(number1, number2);
		$("#output").text(result);
	});
	$("button#multiply").click(function(event) {
		event.preventDefault();
		var number1 = parseInt($("#first").val());
		var number2 = parseInt($("#second").val());
		var result = multiply(number1, number2);
		$("#output").text(result);
	});
	$("button#divide").click(function(event) {
		event.preventDefault();
		var number1 = parseInt($("#first").val());
		var number2 = parseInt($("#second").val());
		var result = divide(number1, number2);
		$("#output").text(result);
	});
});
