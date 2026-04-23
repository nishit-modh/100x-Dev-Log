// 7. Transform API response to object (id → name)

const arr = [
  { id:1, name:"Alice" },
  { id:2, name:"Bob" }
]

// Output:
// { 1:"Alice", 2:"Bob" }
const obj = {}
arr.map((res) => obj[res.id] = res.name)
console.log(obj)