// StringCalculator.js
function Add(num1, num2) {
	var value;
	if(isNaN(num1))
		num1 = 0;
	if(isNaN(num2))
		num2 = 0;
	value = (+num1) + (+num2);
	return value.toString();
}
module.exports = Add;
