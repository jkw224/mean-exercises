var input_array = [1, 5, 54, 2, 23, 10];

function array_sort(current_array){
  num = 0;
  sorted_array = [];

  for(var i = 0; i < current_array.length; i++){  
    if(current_array[i] > num){
      sorted_array.push(current_array[i]);
    } else {
      // not sure what to do here...
      sorted_array.unshift(num); //??
    }
  
  return sorted_array;
  }
}

console.log(array_sort(input_array));