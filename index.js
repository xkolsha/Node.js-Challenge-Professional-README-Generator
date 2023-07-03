// TODO: Include packages needed for this application
// did it by wrting "npm init" in the terminal
// then "npm i inquirer" in the terminal

import inquirer from "inquirer";
import { writeFile } from "fs";
import generateMarkdown from "./utils/generateMarkdown.js";

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Please provide a description of your project.",
  },
  {
    type: "input",
    name: "How to Complete the Challenge",
    message: "Please provide How to Complete the Challenge/Project.",
  },
];

// TODO: Create a function to write README file
async function writeToFile(fileName, data) {
  try {
    await fs.writeFile(fileName, data);
    console.log("Success!");
  } catch (err) {
    console.error(err);
  }
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
