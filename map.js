// Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled
function dubleValues(arr){
  return arr.map(function(value){
    return value*2;
  });
}

// Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.
function valTimesIndex(arr){
  return arr.map(function(value, index){
    return value*index;
  })
}
