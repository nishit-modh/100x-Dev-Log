let start = performance.now();
console.log(start);

setTimeout(() => {
  console.log("Inside timeout!");
  let end = performance.now();
  console.log(end);
  console.log(`Time taken: ${end - start}`);
}, 3000);
