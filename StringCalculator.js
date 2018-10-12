// StringCalculator.js
function Add() {
	var value = 0;
	console.log(arguments.length);
	for(var i = 0; i<arguments.length; i++){
		value = value + (+arguments[i]);
	}
	return value.toString();
}
module.exports = Add;
