// 9. Group people by city

const arr = [
    { name: "A", city: "Delhi" },
    { name: "B", city: "Mumbai" },
    { name: "C", city: "Delhi" },
];

// Output:
// { Delhi:["A","C"], Mumbai:["B"] }
const obj = {};

for (const ele of arr) {
    if (!obj[ele.city]) obj[ele.city] = [];
    obj[ele.city].push(ele.name);
}

console.log(obj);
export {};
