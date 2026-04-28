// ## Write to a file

// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.
const fs = require("fs");

console.log("1. Starting File Read...");

fs.writeFile("fileWrite.txt","I am writing something!" ,(err, data) => {
    if (err) {
        console.error("Error Writing file:", err.message);
        return;
    }
    console.log("3. File Content Written!");
});

// The "Expensive Operation" (Synchronous loop)
console.log("2. Starting Expensive Loop...");
let sum = 0;
for (let i = 0; i < 1000000000; i++) {
    sum += i;
}
console.log("4. Loop Done. Sum is:", sum);