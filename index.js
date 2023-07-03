// TODO: Include packages needed for this application
// did it by wrting "npm init" in the terminal
// then "npm i inquirer" in the terminal

import inquirer from "inquirer";
import { writeFile } from "fs";
import { generateMarkdown } from "./utils/generateMarkdown.js";
import fs from "fs";
import util from "util";

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
    name: "howToComplete",
    message: "Please provide How to Complete the Challenge/Project.",
  },
  {
    type: "input",
    name: "userStory",
    message: "Please provide a User Story.",
  },
  {
    type: "input",
    name: "acceptanceCriteria",
    message: "What are the acceptance criteria for your project?",
  },
  {
    type: "input",
    name: "mockUp",
    message: "Add a link/photo to your project's mock up.",
  },
  {
    type: "input",
    name: "githubRepo",
    message: "What is the GitHub repository URL for your project?",
  },
  {
    type: "input",
    name: "deployedApplication",
    message: "What is the URL for your deployed application?",
  },
  {
    type: "input",
    name: "credits",
    message: "Who are the contributors for this project?",
  },
  {
    type: "list",
    name: "license",
    message: "Please choose the license for your project.",
    choices: [
      "MIT",
      "Mozilla Public License 2.0",
      "Unlicense",
      "BSD-3-Clause",
      "None",
    ],
  },
];

// TODO: Create a function to write README file
// TODO: Create a function to initialize app

async function init() {
  try {
    const answers = await inquirer.prompt(questions);
    const markdown = generateMarkdown(answers);
    const writeFileAsync = util.promisify(fs.writeFile);
    await writeFileAsync("README.md", markdown);
    console.log("Successfully wrote to README.md");
  } catch (error) {
    console.error(error);
  }
}
// Function call to initialize app
init();
