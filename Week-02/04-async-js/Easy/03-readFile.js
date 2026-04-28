// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console.
// You can use the fs library to as a black box, the goal is to understand async tasks.
// Try to do an expensive operation below the file read and see how it affects the output.
// Make the expensive operation more and more expensive and see how it affects the output.
const fs = require("fs");

console.log("1. Starting File Read...");

fs.readFile("file.txt", "utf-8", (err, data) => {
    if (err) {
        console.error("Error reading file:", err.message);
        return;
    }
    console.log("3. File Content Received!");
});

// The "Expensive Operation" (Synchronous loop)
console.log("2. Starting Expensive Loop...");
let sum = 0;
for (let i = 0; i < 1000000000; i++) {
    sum += i;
}
console.log("4. Loop Done. Sum is:", sum);