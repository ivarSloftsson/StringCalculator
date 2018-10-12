// StringCalculator.js
function Add(Input) {
	var value = 0;
	if(Input != null){
		var numbers = Input.split(",");
		console.log(numbers.length);
		for(var i = 0; i<numbers.length; i++){
			//console.log(numbers[i]);
			value = value + (+numbers[i]);
		}
	}
	return value.toString();
}
module.exports = Add;
