function swapNumbers(a, b){
  var newB = [a, a = b][0];
  var newA = [b, b = a][0];
  return "new B: " + newB + " new A: " + newA;
}
