var inquirer = require("inquirer");
var fs = require("fs");
var generateMarkdown = require("./utils/generateMarkdown")

// array of questions for user
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the name of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Please provide a detailed description of your project",
  },
  {
    type: "input",
    name: "installation",
    message:
      "Please provide any instructions for installation, i.e. any necessary dependecies",
  },
  {
    type: "input",
    name: "usage",
    message: "Please provide details about what your project will be used for",
  },
  {
    type: "checkbox",
    name: "license",
    message: "Which badge would you like?",
    choices: ["MIT", "IBM", "ISC", "Mozilla", "Unlicense"],
  },
];

// function to write README file
// function writeToFile(fileName, data) {
// }

// function to initialize program
function init() {
  inquirer.prompt(questions).then(function (data) {
    var fileName = data.title.toLowerCase().split(' ').join('') + ".md";
    var md = generateMarkdown(data);
    fs.writeFile(fileName, md, function (err) {
      if (err) {
        return console.log(err);
      }

      console.log("Success!");
    });
  });
}

// function call to initialize program
init();
