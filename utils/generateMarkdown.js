// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description

  ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [License](#license)
  * [Contact Me](#questions)
  
  ## Installation

  ${data.installation}


  ## Usage

  ${data.usage}


  ## Contributing

  ${data.contributing}


  ## Tests

  ${data.tests}


  ## License

  This application is covered under: ${data.license}


  ## Questions?

  If you have any questions, please don't hesitate to reach out!

  Github: [${data.username}](https://github.com/${data.username})
  
  Email: [${data.email}](${data.email})
`;
}

module.exports = generateMarkdown;