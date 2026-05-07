// Problem Description – I/O Operation With Timeout
//
// You are given an asynchronous function that represents an I/O-bound task
// (such as a network request or database call).
//
// Your task is to execute this function, but enforce a time limit.
// If the I/O operation does not complete within the specified number
// of milliseconds, the returned promise should reject with a "Timeout" error.

const rejectAfter = require("../../02-callbacks/easy/rejectAfter");

async function ioWithTimeout(fn, ms) {
    const start = performance.now();
    const promiseTimeout = new Promise((_, reject) => {
        while (performance.now() - start < ms) {}
        reject("Timeout");
    });
    Promise.race([fn(), promiseTimeout]);
}

module.exports = ioWithTimeout;
