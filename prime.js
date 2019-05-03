function prime (num){
var i = 2;
  while(num > i){
    if(num % i == 0){
      return false;
    }
    i++;
  }
  return true;
}
