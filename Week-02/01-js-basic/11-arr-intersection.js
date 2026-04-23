// 11. Find intersection of all arrays in object

const obj = {
  a: [1, 2, 3],
  b: [2, 3, 4],
  c: [3, 4, 5],
};

// Output:
// [3]
const arrays = Object.values(obj);

let intersection = arrays[0];

for (let i = 1; i < arrays.length; i++) {
  const currentSet = new Set(arrays[i]);
  intersection = intersection.filter(num => currentSet.has(num));
}

console.log(intersection);