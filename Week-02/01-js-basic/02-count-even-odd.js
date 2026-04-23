// 2. Count even and odd numbers in array

const arr = [1,2,3,4,5,6]

// Output:
// { even: 3, odd: 3 }
const out = {
    even: 0,
    odd: 0
}

for (const num of arr){
    num%2 == 0? out.even++ : out.odd++
}

console.log(out.even)