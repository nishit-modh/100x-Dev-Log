/*
  Write a function `findDuplicates` which takes an array as input and returns an array containing all the duplicate elements.

  What are duplicates?
  - Elements that appear more than once in the array are considered duplicates.

  Example:
  - Input: [10, 20, 30, 10, 40]
  - Output: [10]

  - Input: [1, 2, 3, 4, 5]
  - Output: []

  - Input: []
  - Output: []

  Once you've implemented the logic, test your code by running
  - `npm run test-duplicates`
*/


function findDuplicates(arr) {
  // clean but T: O(N**2)
  // return arr.filter((ele, index) => arr.indexOf(ele) !== index);

  // rough but T: O(N)
  const inArr = new Set()
  const dupes = new Set() // set cause Array will actch all duplicate occurances
  for (const num of arr){
    inArr.has(num) ? dupes.add(num) : inArr.add(num)
  }
  return [...dupes]
}

module.exports = findDuplicates;
