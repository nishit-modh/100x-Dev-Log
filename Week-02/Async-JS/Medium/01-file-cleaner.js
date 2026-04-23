// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require("fs");

const filePath = "file.txt";

fs.readFile(filePath, "utf8", (readErr, data) => {
    if (readErr) {
        console.error("Critical Read Error:", readErr.message);
        return;
    }

    const cleanedData = data.replace(/\s+/g, " ").trim();

    fs.writeFile(filePath, cleanedData, (writeErr) => {
        if (writeErr) {
            console.error("Critical Write Error:", writeErr.message);
            return;
        }
        console.log('Updated File successfully saved.');
    });
});
