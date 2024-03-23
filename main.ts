//#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

//step 1

const answers: {
    numberOne: number,
    numberTwo: number,
    operator: string,
} = await inquirer.prompt([
    {type: "number",
     name: "numberOne",
     message: "Enter your number",
    },
    {type: "number",
     name: "numberTwo",
     message: "Enter your number",
    },
    {type: "list",
    name: "operator",
    message: "Enter your operator",
    choices: ["+", "-", "*", "/"]},
])

//step 2
const {numberOne, numberTwo, operator} = answers;

let result
switch (operator) {
    case "+":
    result = numberOne + numberTwo;    
    break;
    case "-":
    result = numberOne - numberTwo;
    break;
    case "*":
    result = numberOne * numberTwo;
    break;
    case "/":
    result = numberOne / numberTwo;
    break;
    default:
    console.log("Invalid operator");                
}

console.log(chalk.green(`${numberOne} ${operator} ${numberTwo} = ${result}`));