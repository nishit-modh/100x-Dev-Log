// 8. Sum all transactions per user

const arr = [
    { user: "A", amount: 100 },
    { user: "B", amount: 200 },
    { user: "A", amount: 50 },
];

// Output:
// { A:150, B:200 }
const obj = {};
arr.forEach((element) => {
    if (Object.hasOwn(obj, element.user)) {
        obj[element.user] += element.amount;
    } else {
        obj[element.user] = element.amount;
    }
});
console.log(obj);
export {};
