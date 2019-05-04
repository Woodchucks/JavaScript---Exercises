function findMissingNumber(arr){
  var missingNr = [];
  arr.sort((a,b)=>a-b).filter(function(val, idx, arr){
       if(arr[idx+1] - arr[idx] == 2) {
         missingNr.push(val+1);
       }       
  });
  return "Missing number/s: " + missingNr;
}

//var arr = [...Array(101).keys()].slice(1) creating a sorted arr of 100 numbers 
