// function to generate markdown for README
function generateMarkdown(data) {
  console.log("Worked", data)
    return `# ${data.title}
    ${data.description}
    ## Table of Contents
    - Installation
    - Usage
    - License
    ### Installation
    ${data.installation}
    ### Usage
    ${data.usage}
    ### License
    ${data.license}
  `;
  }
  
  module.exports = generateMarkdown;
  