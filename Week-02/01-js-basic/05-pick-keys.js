// 5. Pick only given keys from object

const obj = { name:"Rahul", age:23, city:"Noida" }
const keys = ["name","city"]

// Output:
// { name:"Rahul", city:"Noida" }

const selectKeys = {}
keys.forEach((key) => selectKeys[key] = obj[key])
console.log(selectKeys)