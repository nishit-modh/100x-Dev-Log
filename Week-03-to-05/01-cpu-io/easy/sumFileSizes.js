// Problem Description – Sum File Sizes
//
// You are given an array of file paths. Your task is to implement a function
// that returns the total size of all these files in bytes.
//
// Requirements:
// 1. Use fs.promises.stat() to get file information.
// 2. Return the sum of `size` property of all files.
// 3. Handle cases where a file might not exist (optional: you can let it throw or return 0).
// 4. Tasks should ideally be performed in parallel for efficiency.

const fs = require("fs");
const promiseAll = require("../../03-promises/easy/promiseAll");

async function sumFileSizes(filePaths) {
    const paths = filePaths.map(path => fs.promises.stat(path))
    const sizes = await Promise.all(paths)
    return sizes.reduce((a,b) => a+b.size, 0);
}

module.exports = sumFileSizes;
