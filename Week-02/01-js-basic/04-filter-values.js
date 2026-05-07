// 4. Filter object by values > 50

const obj = { a: 20, b: 60, c: 40, d: 90 };

// Output:
// { b:60, d:90 }
const great50 = {};

Object.entries(obj).forEach((val) => {
    if (val[1] > 50) great50[val[0]] = val[1];
});
console.log(great50);
export {};
