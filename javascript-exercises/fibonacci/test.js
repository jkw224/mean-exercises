//var count = prompt("How many iterations do you want do go through?");
var array = [0, 1];
var max = 10;

//for(var i = array.length - 1; array.length <= max; i++){

for(var i = 0; i <= max; i++){
  var newValue = array[i] + array[i + 1];
  array.push(newValue);
}

console.log(array);
