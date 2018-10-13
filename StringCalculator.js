// StringCalculator.js
function Add(Input) {
	var value = 0;
	var negatives = [];
	//If input is not empty
	if(Input != null){
		//If there will be a different delimiter
		if(Input.substring(0,2) == "//"){
			var n = Input.indexOf("\n");
			var delimiter = Input.substring(2,n);
			//Cutting off the part where the delimiter is
			Input = Input.substring(n+1, Input.length);
			Input = Input.replace(delimiter, ",");
		}
		Input = Input.replace(/\n/, ",");
		//Splitting string in array of letters on ','
		var numbers = Input.split(",");
		//Adding values
		for(var i = 0; i<numbers.length; i++){
			//Checking if numbers are negative
			if((+numbers[i]) < 0){
				negatives.push(numbers[i]);
			}
			else{
				//Ignore values bigger than 1000
				if(numbers[i]<=1000){
					value = value + (+numbers[i]);
				}
			}
		}
	}
	//If negative numbers were found, a exception is thrown
	if(negatives.length > 0){
		negatives = negatives.join();
		throw "Negatives not allowed:"+negatives;
	}
	return value.toString();
}
module.exports = Add;
