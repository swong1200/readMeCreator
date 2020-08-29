const inquirer = require("inquirer");
const fs = require("fs");
const utility = require("./utils/generateMarkdown.js");
const util = require("util");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
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
    type: "rawlist",
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

// function to initialize program
async function init() {
  console.log("Helllo");
  try {
    const answers = await inquirer.prompt(questions);
    console.log(answers);
    // await readFileAsync(utility.licenses[answers.license[0]])
    let mit =  await readFileAsync("./mit.txt", "utf8")

    const md = utility.generateMarkdown(answers, mit);

    let fileName = answers.title.toLowerCase().split(' ').join('') + ".md";
    console.log(fileName)
   

    const data = await writeFileAsync(fileName, md)
    console.log(data)
    
  }
   catch (err) {
    console.log(err);
  }
}

// function call to initialize program
init();
