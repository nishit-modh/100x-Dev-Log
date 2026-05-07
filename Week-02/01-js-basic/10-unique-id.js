// 10. Remove duplicate objects by id

const arr = [
    { id: 1, name: "A" },
    { id: 2, name: "B" },
    { id: 1, name: "A" },
];

// Output:
// [
//   { id:1, name:"A" },
//   { id:2, name:"B" }
// ]
const unique = new Set();
const uniqueArr = arr.filter((ele) => {
    if (!unique.has(ele.id)) {
        unique.add(ele.id);
        return true;
    }
});
console.log(uniqueArr);
export {};
