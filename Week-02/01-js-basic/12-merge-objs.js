// 12. Deep merge two nested objects

const obj1 = { a: { x: 1, y: 2 } };
const obj2 = { a: { y: 3, z: 4 } };

// Output:
// { a:{ x:1, y:3, z:4 } }
let result = { a: { ...obj1.a, ...obj2.a } };
console.log(result);
export {};
