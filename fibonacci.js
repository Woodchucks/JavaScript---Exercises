function fibonacci(num){
  var fib = [0, 1];
  for(i = 0; i < num; i++){
    fib.push(fib[i] + fib[i+1])
  }
  return fib[num-1];
}
