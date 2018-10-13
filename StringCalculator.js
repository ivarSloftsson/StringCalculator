// StringCalculator.js
function Add(Input) {
	var value = 0;
	//If input is not empty
	if(Input != null){
		//If there will be a different delimiter
		if(Input.substring(0,2) == "//"){
			var n = Input.indexOf("\n");
			var delimiter = Input.substring(2,n);
			Input = Input.substring(n+1, Input.length);
			Input = Input.replace(delimiter, ",");
		}
		Input = Input.replace(/\n/, ",");
		//Splitting string in array of letters on ','
		var numbers = Input.split(",");
		//Adding values
		for(var i = 0; i<numbers.length; i++){
			if(numbers[i]<=1000){
				value = value + (+numbers[i]);
			}
		}
	}
	return value.toString();
}
module.exports = Add;
