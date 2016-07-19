/*
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum
of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than 10 are 1, 1, 3, and 5.
*/

function sumFibs(num) {
  function Fibonacci(n) {
    if (n == 0 || n == 1) return 1;
    else
      return Fibonacci(n - 1) + Fibonacci(n - 2);
  }
  var fib = 0;
  var sum = 0;
  for (var i = 0; i < num; ++i) {
    fib = Fibonacci(i);
    if (fib <= num) {
      (fib % 2) ? sum += fib : sum = sum;

    } else {
      break
    }

  }
  return num=sum;
}

console.log(sumFibs(1000));
console.log(sumFibs(4));
console.log(sumFibs(75024));
