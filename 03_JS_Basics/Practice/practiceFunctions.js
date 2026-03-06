// to fill array - uses map function
const nums = Array.from({ length: 25 }, (_, i) => i + 1);
console.log(nums);

// Even Numbers
console.log("Even Numbers in the Array");
for (let num of nums) {
  if (num % 2 === 0) console.log(num);
}

// Biggest Number in array
console.log("Biggest Number in the Array:");
let Biggest = nums[0];
for (let i = 1; i < nums.length; i++) {
  if (Biggest < nums[i]) Biggest = nums[i];
}
console.log(`Biggest Number in array is ${Biggest}`);

// check prime nums2
function primeCheck(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}
for (let i = 0; i < nums.length; i++) {
  console.log(`${nums[i]}  =>  ${primeCheck(nums[i])}`);
}

// print prime nums
function generatePrime(limit) {
  const primes = [];

  for (let i = 2; i <= limit; i++) {
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) primes.push(i);
  }
  return primes;
}
console.log(generatePrime(100));

// Fibonacci Series
function fibonacci(n) {
  const fib = [];
  for (let i = 0; i < n; i++) {
    if (i < 2) {
      fib.push(i);
    } else {
      fib.push(fib[i - 1] + fib[i - 2]);
    }
  }
  return fib;
}
console.log(fibonacci(20));
