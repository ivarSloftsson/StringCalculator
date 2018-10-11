// StringCalculator.js
function Add(num1, num2) {
	var value = (+num1) + (+num2)
	if(isNaN(value))
		value = 0;
	return value.toString();
}
module.exports = Add;
