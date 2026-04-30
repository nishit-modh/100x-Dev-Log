/*
  Write a function `reverseInteger` which takes an integer as input and returns the integer with its digits reversed. If the input is negative, the reversed integer should also be negative.

  What is reversing an integer?
  - Reversing an integer means rearranging its digits in the opposite order while maintaining its sign.

  Example:
  - Input: 123
  - Output: 321

  - Input: -456
  - Output: -654

  - Input: 100
  - Output: 1

  - Input: 0
  - Output: 0

  Once you've implemented the logic, test your code by running
  - `npm run test-reverseInteger`
*/

// function reverseInteger(num) {
//   let sign = num < 0 ? -1 : 1;
//   num = Math.abs(num);
//   let revNum = 0;
//   while (num > 0) {
//     let lastDigit = num % 10;
//     num = Math.floor(num / 10);
//     revNum = revNum * 10 + lastDigit;
//   }
//   return revNum * sign;
// }

const reverseInteger = (num) =>
  parseInt(Math.abs(num).toString().split("").reverse().join("")) *
  Math.sign(num);

module.exports = reverseInteger;
