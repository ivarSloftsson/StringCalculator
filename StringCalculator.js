// StringCalculator.js
function Add(Input) {
	var value = 0;
	if(Input != null){
		Input = Input.replace(/\n/, ",");
		var numbers = Input.split(",");
		for(var i = 0; i<numbers.length; i++){
			value = value + (+numbers[i]);
		}
	}
	return value.toString();
}
module.exports = Add;
