var array = ['a', 'b', 'c' , 'd', 'e', 'f' , 'g', 'h', 'i', 'j', 'k', 'l','m', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


// return array of vowels and array of consonants

function vowelFinder(){
	vowelComparison = ['a', 'e', 'i', 'o', 'u'];
	vowelArray = [];
	consonantArray = [];

	for (i = 0; i < array.length ; i++){
		for(i = 0; i < vowelComparison.length; i++){
			if(array[i] = vowelComparison[i]){
				vowelArray.push(array[i]);
			} else {
				consonantArray.push(array[i]);
			}
		}
		console.log(vowelArray);
		console.log(consonantArray);
		return;
	}
}
console.log(vowelFinder());

// //Chase's solution

// var filterVowel = array.filter(function(value){
// 	var vowels = 'aeiou';
// 	var n = vowels.indexOf(value);
// 	return n === -1;
// 	)};

// cconsol.log()