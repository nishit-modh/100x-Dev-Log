/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
  let max = numbers[0];
  for (const num of numbers) {
    if (max < num) max = num;
  }
  return max;

  return Math.max(...numbers) // same usng a Math function
}

console.log(findLargestElement([3, 7, 2, 9, 1]));
module.exports = findLargestElement;
