//write a function which returns the first non repeating character in a string in javascript
function findFirstNonRepeatedLetter(str){
  var strSplit = str.split("");      
  return strSplit.filter(function(val, idx){
    return strSplit.indexOf(val, (idx+1)) == -1;
  })[0]
}

 // 1. `split("")` makes an array from a string, it is necessary, because
 //    `filter()` method operates on arrays
 // 2. `fiter()` method creates a new array with the values that have
 //    fulfiled the condition from the callback function
 // 3. the callback function accepts the current value and current
 //    index, it checks if the first encountered letter is not repeating
 //    itself within the string, therefore the value -1
 // 4. since `filter()` method gives back an array of all letters that
 //    are not repeating itself within a function I placed `[0]` after the
 //    callback function to get only the first value from the array at
 //    idx 0
