var myString = "Joanthan Wood 28 02-24-1986"

// function converter (myString) {
// 	var splitString = [];
// 	splitString = myString.split(" ");
// 	return splitString;
// }

function objectifier(input_string) {
	var personsInfo = input_string.split(' ');
	
	var person = {
		firstName: personsInfo[0],
		lastName: personsInfo[1],
		age: personsInfo[2],
		birthday: personsInfo[3]
	};

	return person;

	// person.firstName = personsInfo[0];
	// person.lastName = personsInfo[1];
	// person.age = personsInfo[2];
	// person.birthday = personsInfo[3];
	// return person;
}

console.log(objectifier(myString));