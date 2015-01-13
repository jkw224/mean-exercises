//Define a function maxOfThree() that takes three numbers as arguments 
//and returns the largest of them.

function maxOfThree(myArray){
  var max = 0;
  
  for(i = 0; i < myArray.length; i++ ) {
    if(myArray[i] > max){
      max = myArray[i];
    }
    console.log(max + " is your largest number!");
}


function getYoNumba(){
  numCount = parseInt(prompt("How many numbers do you want to compare?"));
  var myArray = [];
  
  for(var i = 0; i < numCount; i++){  //noprotect
    var num1 = prompt("Enter your " + ordinalNumberGenerator(i) + " number!");
    myArray.push(parseInt(num1));
  }
  console.log(myArray);
  return myArray;
}


function ordinalNumberGenerator(num){
  var last_digit = num % 10;
  if (last_digit === 1) {
    return num + "st";
  } else if (last_digit === 2){
    return num + "nd";
  } else if (last_digit === 3){
    return num + "rd";
  } 
    return num + "th";
  
}


maxOfThree(getYoNumba());