// Dependencies
const inquirer = require("inquirer");
const fs = require("fs");
const utility = require("./utils/generateMarkdown.js");
const util = require("util");

// Runs fs async
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

// Array of questions for user
const questions = [
  {
    type: "input",
    name: "github",
    message: "What is your Github username? ",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address? ",
  },
  {
    type: "input",
    name: "title",
    message: "What is the name of your project? ",
  },
  {
    type: "input",
    name: "description",
    message: "Please provide a detailed description of your project: ",
  },
  {
    type: "input",
    name: "installation",
    message:
      "Please provide any instructions for installation, i.e. any necessary dependecies: ",
  },
  {
    type: "input",
    name: "usage",
    message: "Please provide details about what your project's usage: ",
  },
  {
    type: "list",
    name: "license",
    message: "Which badge would you like?",
    choices: ["MIT", "IBM", "ISC", "Mozilla", "Unlicense"],
  },
  {
    type: "input",
    name: "contributing",
    message: "Please provide any details about contributing guidelines: ",
  },
  {
    type: "input",
    name: "tests",
    message: "What tests are necessary? ",
  },
];

// Function to initialize program
async function init() {
  console.log("Let me help you create a ReadMe.md...");

  try {
    const answers = await inquirer.prompt(questions);

    let legal;
    if (answers.license === "MIT") {
      legal = await readFileAsync("./mit.txt", "utf8");
    } else if (answers.license === "IBM") {
      legal = await readFileAsync("./ibm.txt", "utf8");
    } else if (answers.license === "ISC") {
      legal = await readFileAsync("./isc.txt", "utf8");
    } else if (answers.license === "Mozilla") {
      legal = await readFileAsync("./mozilla.txt", "utf8");
    } else {
      legal = await readFileAsync("./unlicense.txt", "utf8");
    }

    const md = utility.generateMarkdown(answers, legal);

    const fileName = answers.title.toLowerCase().split(" ").join("") + ".md";

    await writeFileAsync(fileName, md);
  } catch (err) {
    console.log(err);
  }
}

// function call to initialize program
init();
