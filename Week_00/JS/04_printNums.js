// I will tell you hello a 1000 times
for (let i = 0; i <= 1000; i++) {
  console.log(`${i} times hello!!`);
}

// And this is the total numbers of hellos
let ans = 0;
for (let i = 0; i <= 1000; i++) {
  ans += i;
}
console.log(`I said hello ${ans} times.`);

// parserInt

console.log(parseInt("43px"));
console.log(parseInt("2.5"));
console.log(parseInt("50abc123"));
console.log(parseInt("abc"));