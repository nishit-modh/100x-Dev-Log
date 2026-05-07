/*
  Write a function `getPrimesUpTo100` which returns an array of all prime numbers up to 100.

  What is a prime number?
  - A prime number is a number greater than 1 that has no divisors other than 1 and itself.

  Example:
  - Output: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]

  - Input: There is no input, the function returns an array of primes.

  - Input: N/A

  Once you've implemented the logic, test your code by running
  - `npm run test-prime`
*/

function getPrimesUpTo100() {
  // 3 is first proper prime number after 2
  const primeNums = [2];
  // skips even nums using i += 2
  for (let i = 3; i <= 100; i += 2) {
    let isPrime = true;
    for (let j = 3; j <= Math.sqrt(i); j += 2) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) primeNums.push(i);
  }
  return primeNums;
}

console.log(getPrimesUpTo100());

module.exports = { getPrimesUpTo100 };
