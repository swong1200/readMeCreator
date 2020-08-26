// function to generate markdown for README
function generateMarkdown(data) {
  console.log("Success", data)
    return `# ${data.title}
## Description
    ${data.description}
## Table of Contents
    [Installation](#Installation)
    - Usage
    - License
### Installation
    ${data.installation}
### Usage
    ${data.usage}
### License
    ${data.license}
### Contributing
    ${data.contributing}
### Tests
    ${data.tests}
### Questions
    If you have any questions about this project, please forward them to me at ${data.email}.
    [www.github.com/${data.github}](https://github.com/${data.github})
  `;
  }
  
  module.exports = generateMarkdown;
  