const readline = require("node:readline");
const readlineInterfaceOptions = {
  input: process.stdin,
  output: process.stdout,
};

const question1 = `Enter the numbers you would like to sort(seperated by space(s)):`;
const question2 = `Choose what to do with these numbers:
1. Find the lowest element.
2. Apply Bubble Sort.
2. Apply Selection Sort
2. Apply Insertion Sort.`;

let array = [];

const rl = readline.createInterface(readlineInterfaceOptions);

const askInput = (string) => {
  if (string.trim().length) {
    for (str of string.split(" ")) {
      try {
        if (!str.length) continue;
        const number = parseInt(str);
        if (number) array.push(parseInt(str));
        else continue;
      } catch (e) {
        console.log(e);
        process.exit(0);
      }
    }
  }
  if (!array.length) {
    console.log("I only accept numbers, idiot XD");
    rl.close();
  } else {
    console.log("Your Input:", array);
    rl.question(question2, () => console.log(input));
  }
};

rl.question(question1, askInput);
