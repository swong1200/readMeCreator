const fs = require("fs");

// License Badges
const badges = {
  MIT:
    "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
  IBM:
    "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)",
  ISC:
    "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)",
  Mozilla:
    "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
  Unlicense:
    "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)",
};

// const licenses = {
//   MIT:  fs.readFile("./mit.txt", "utf8", function (err, contents) {
//       if (err) throw err;
//       let mit = contents;
//       console.log(mit)
//     }),
//   ISC:  fs.readFile("./isc.txt", "utf8", function (err, contents) {
//     if (err) throw err;
//     let isc = contents;
//     console.log(isc)
//   }),
// }



// function to generate markdown for README
function generateMarkdown(data, mit) {
  console.log("Success", data);
  return `# ${data.title}
${badges[data.license]}
### Description
${data.description}
### Table of Contents
-[Installation](#installation)\n
-[Usage](#usage)\n
-[License](#license)\n
-[Contributing](#contributing)\n
-[Tests](#tests)\n
-[Questions](#questions)\n
### Installation
${data.installation}
### Usage
${data.usage}
### License
${mit}
### Contributing
${data.contributing}
### Tests
${data.tests}
### Questions
If you have any questions or issues, please forward them to me at ${data.email}.
### Author
[www.github.com/${data.github}](https://github.com/${data.github})
  `;
}

module.exports = 
{
  generateMarkdown: generateMarkdown,
  // licenses: licenses
}

  


