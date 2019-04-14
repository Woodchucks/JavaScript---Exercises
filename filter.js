// Write a function called find which accepts an array and a value and returns the first element in the array that has the same value as the second parameter or undefined if the value is not found in the array.
function find(arr, val){
  return arr.filter(function(value){
    return value==val;
  })[0];
}

// Write a function called findInObj which accepts an array of objects, a key, and some value to search for and returns the first found value in the arrayt.
function findInObj(arr, key, value){
  return arr.filter(function(val){
    return value == val[key]
  })[0]
}

// Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. Every character in the new string should be lowercased.
function removeVowels(str){
  var vowels = "aeiou";
  var splitStr = str.toLowerCase().split(" ");
  return splitStr.filter(function(strValue){
    return vowels.indexOf(strValue) == -1
  }).join('')
}

// Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers doubled (HINT - you can use map and fitler to double and then filter the odd numbers).
function doubleOddNumbers(arr){
    return arr.filter(function(value){
        return value % 2 !== 0;
    }).map(function(value){
        return value *2;
    })
}
