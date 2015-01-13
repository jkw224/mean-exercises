//Define a function max() that takes two numbers as arguments and returns 
//the largest of them. Use the if-then-else construct available in Javascript.

function max(){
  var num2 = prompt("Enter a number!");
  var num1 = prompt("Enter another a number!");
  
  if(num1 > num2){
    console.log(num1 + " is the bigger number!");
  } else {
    console.log(num2 + "is the bigger number!");
  }
}

max();