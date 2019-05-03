function primeFactors(num){
  var factors = [];
  var i = 2;
  while(num >= i){
    if(num % i == 0){
      factors.push(i);
      num = num/i;
    } else{
     i++;     
    }
  }
  return factors;
}
