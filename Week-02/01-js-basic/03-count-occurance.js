// 3. Count word occurrences in array

const arr = ["apple", "banana", "apple", "orange", "banana", "apple"];

// Output:
// { apple: 3, banana: 2, orange: 1 }
const out = {};

for (const element of arr) {
  Object.hasOwn(out, element) ? out[element]++ : (out[element] = 1);
}
console.log(out);
