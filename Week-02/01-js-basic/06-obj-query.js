// 6. Convert object to query string

const obj = { name: "Alice", age: 25 };

// Output:
// "name=Alice&age=25"
str = Object.entries(obj)
  .map(([key, val]) => key + "=" + val)
  .join("&");
console.log(str);
