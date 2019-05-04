// Check whether any two numbers in an unsorted array sums to a given number

function findSum(arr, nr){
  for(var i=0; i<arr.length; i++){
    for(var j=i+1; j<arr.length; j++){
      if(arr[i] + arr[j] == nr){
        return true;
      } 
    }
  }
  return false;
}
