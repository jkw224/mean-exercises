//array.indexOf()

//This is the Array Filter Function:

var lessThan100 = array.filter(function(value) {
	return value < 100;
});

console.log(lessThan100);



// Not sure which function this is:

var array1 = ['a', 'b', 'c', 'd', 'e'];

function getIndex(array, value) {
	if (!Array.isArray(array)){
		throw new Error('Non array passed to getIndex()');
	}

	for (var i = 0; i < array.length; i++){
		console.log('Test: ', i);
		if (array[i] === value) {
			return i;
		}
 	}
 	return -1;
}

console.log(getIndex(array1, "d"));
console.log(getIndex(array1, "z"));