#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgCyanBright.bold.blackBright("------------------CALCULATOR-----------------\n"));
const answer = await inquirer.prompt([
    { message: chalk.blue("Enter First Number : "), type: "number", name: "firstNumber" },
    { message: chalk.blue("Enter Second Number : "), type: "number", name: "secondNumber" },
    {
        message: chalk.greenBright("Select one of the following Operators"),
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
// Applying Conditions
if (answer.operator === "Addition") {
    console.log(`Result of ${answer.firstNumber} + ${answer.secondNumber} is :`, answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "Subtraction") {
    console.log(`Result of ${answer.firstNumber} - ${answer.secondNumber} is :`, answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log(`Result of ${answer.firstNumber} * ${answer.secondNumber} is :`, answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "Division") {
    console.log(`Result of ${answer.firstNumber} / ${answer.secondNumber} is :`, answer.firstNumber / answer.secondNumber);
}
else {
    console.log("Please Select a Valid Operator");
}
