// Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled
function doubleValues(arr){
  var newArr = [];
  arr.forEach(function(value){
      newArr.push(value*2);
    })
  return newArr;
}

// Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function
function onlyEvenValues(arr){
  var newArr = [];
  arr.forEach(function(value){
    if(value%2==0){
      newArr.push(value);
    }
  })
  return newArr;
}

//Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.
function showFirstAndLast(arr){
  var newArr = [];
  arr.forEach(function(value){
    newArr.push(value[0] + value[value.length-1])
  })
  return newArr;
}
