const findLowestElement = require("./array");
const bubbleSort = require("./bubbleSort");

const readline = require("node:readline");
const readlineInterfaceOptions = {
  input: process.stdin,
  output: process.stdout,
};

const question1 = `\nEnter the numbers you would like to sort(seperated by space(s)):`;
const question2 = `\nChoose what to do with these numbers:
1. Find the lowest element.
2. Apply Bubble Sort.
3. Apply Selection Sort
4. Apply Insertion Sort.
\n`;
const question2Options = ["1", "2"];

let array = [];

const rl = readline.createInterface(readlineInterfaceOptions);

const sanitizeValidNo = (funcNo) => {
  return funcNo.trim()[0];
};

const chooseAndRunFunction = (funcNo) => {
  switch (sanitizeValidNo(funcNo)) {
    case question2Options[0]:
      findLowestElement(array);
      rl.close();
      break;
    case question2Options[1]:
      bubbleSort(array);
      rl.close();
      break;
    default:
      console.log("\nInvalid Option. :(");
      rl.prompt();
  }
};

const sanitizeListOfNumbersByUser = (string) => {
  for (str of string.split(" ")) {
    if (!str.length) continue;
    const number = parseInt(str);
    if (number) array.push(parseInt(str));
    else continue;
  }
};

const askArray = (string) => {
  try {
    if (!string.trim().length) {
      console.log("\nEnter numbers... idiot XD");
      rl.close();
    }
    sanitizeListOfNumbersByUser(string);
    if (!array.length) {
      console.log("\nI only accept numbers, idiot XD");
      rl.close();
    } else {
      console.log("\nYour Input:", array);
      rl.setPrompt(question2);
      rl.prompt();
      rl.on("line", chooseAndRunFunction);
      rl.on("close", () => {
        console.log("\nbye!");
        process.exit(0);
      });
    }
  } catch (e) {
    console.log(e);
    process.exit(0);
  }
};

rl.question(question1, askArray);
