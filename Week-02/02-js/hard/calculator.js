/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
  - `npm run test-calculator`
*/

class Calculator {
  constructor() {
    this.result = 0;
  }
  add(a) {
    this.result += a;
  }
  subtract(a) {
    this.result -= a;
  }
  multiply(a) {
    this.result *= a;
  }
  divide(a) {
    if (a === 0) throw new Error("Invalid: Division by zero!");
    this.result /= a;
  }
  clear() {
    this.result = 0;
  }
  calculate(s) {
    let numStr = "";
    let num = 0;
    let op = "+";
    let i = 0;
    const stack = [];
    let valid_par = 0;

    const helper = function (op, num) {
      if (op === "+") stack.push(num);
      else if (op === "-") stack.push(-num);
      else if (op === "*") stack.push(stack.pop() * num);
      else if (op === "/") {
        if (num === 0) {
          throw new Error("Invalid Expression!");
        } else {
          stack.push(stack.pop() / num);
        }
      }
    };
    while (i < s.length) {
      if (s[i] === " ") {
        i++;
        continue;
      }
      if (/[0-9]/.test(s[i])) {
        while (i < s.length && /[0-9.]/.test(s[i])) {
          numStr += s[i];
          i++;
        }
        if ((numStr.match(/\./g) || []).length > 1) {
          throw new Error("Invalid number");
        }
        i--;
        num = parseFloat(numStr);
        numStr = "";
      } else if (s[i] === "(") {
        stack.push(op);
        valid_par++;
        num = 0;
        op = "+";
      } else if ("+-*/".includes(s[i])) {
        helper(op, num);

        num = 0;
        op = s[i];
      } else if (s[i] === ")") {
        valid_par--;
        if (valid_par < 0) throw new Error("Invalid: Incorrect syntax!");
        helper(op, num);
        num = 0;
        while ((stack.length && typeof stack.at(-1)) === "number") {
          num += stack.pop();
        }
        op = stack.pop();
        helper(op, num);
        num = 0;
        op = "";
      } else throw new Error("Invalid Expression!");
      i++;
    }
    if (valid_par !== 0) throw new Error("Invalid: Incorrect syntax!");
    helper(op, num);
    this.result = stack.reduce((acc, val) => acc + val, 0);
  }
  getResult() {
    return this.result;
  }
}

module.exports = Calculator;
