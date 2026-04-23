const readline = require("readline");

// Create an interface for reading input from the console (process.stdin)
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Are you a Male or Female? (write: M/F/O)", (answer) => {
  if (answer === "M") {
    rl.question("Hello Sir, May I know your good name?", (ans) => {
      console.log(`Oh, so you are Mr."${ans}"!!!`);
    });
  } else if (answer === "F") {
    rl.question("Hello Miss, May I know your good name?", (ans) => {
      console.log(`Oh, so you are Ms."${ans}"!!!`);
    });
  } else {
    console.log("Hey you, Choose a correct gender!!!");
  }
  rl.close();
});
