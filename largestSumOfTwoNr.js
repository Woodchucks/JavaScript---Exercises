function largestSumOfTwoNr(arr){
  var sortedArr =  arr.sort((a,b)=>b-a);
  return sortedArr[0] + sortedArr[1];
}
