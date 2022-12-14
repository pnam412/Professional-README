// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license != "none") {
    return `This repo is not currently licensed`
  }
  else if (license == "MIT") {
    return `![MIT](https://img.shields.io/badge/license-MIT-green)`
  }
  else if (license == "Apache 2.0") {
    return `![Apache](Apache License](http://www.apache.org/licenses/)`
  }
  else if (license == "GNU") {
    return `![GNU](Apache License](https://fsf.org/)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (licenseLink !== "none") {
    return ``
  }
  else if (license == "MIT") {
    return `[MIT License](https://opensource.org/licenses/MIT/)`
  }
  else if (license == "Apache 2.0") {
    return `[Apache License](http://www.apache.org/licenses/)`
  }
  else if (license == "GNU") {
    return `[Apache License](https://fsf.org/)`
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (licenseLink !== "none") {
    return ``
  }
  else if (license == "MIT") {
    return `A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`
  }
  else if (license == "Apache 2.0") {
    return `A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`
  }
  else if (license == "GNU") {
    return `Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.`
  }

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
 
## Description
${data.description}
## Table of Contents (Optional)

- [Installation](#installation)
${data.installation}
- [Usage](#usage)
${data.usage}
- [License](#license)
${data.license} }
- [Credits](#credits)
${data.credits}
- [Contribute](#contribute)
${data.contribute}
- [Tests](#tests)
${data.tests}
`
};


module.exports = generateMarkdown;
