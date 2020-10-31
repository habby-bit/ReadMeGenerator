const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const generateMarkdown = require('./utils/generateMarkdown.js');

const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
  return inquirer.prompt([
    {
        name: 'title',
        message: 'What is the title of your project?'
      },
      {
        name: 'description',
        message: 'Give a description of your project.'
      },
      {
        name: 'installation',
        message: 'What are the installation instructions?'
      },
      {
        name: 'usage',
        message: 'What is the usage information?'
      },
      {
        name: 'contributing',
        message: 'Who are the contributors to this project?'
      },
      {
        name: 'tests',
        message: 'What are the instructions?'
      },
      {
        name: 'username',
        message: 'What is your Github username?'
      },
      {
        name: 'email',
        message: 'What is your email address?'
      },
      {
        type: 'checkbox',
        message: 'What license would you like?',
        name: 'license',
        choices: ['Apache License 2.0', 
        'GNU General Public License v3.0', 
        'MIT License', 'BSD 2-Clause "Simplified" License', 
        'BSD 3-Clause "New" or "Revised" License', 
        'Boost Software License 1.0', 'Creative Commons Zero v1.0', 
        'Universal Eclipse Public License 2.0',
        'GNU Affero General Public License v3.0',
        'GNU General Public License v2.0',
        'GNU Lesser General Public License v2.1',
        'Mozilla Public License 2.0',
        'The Unlicense']
      }
  ])
};

promptUser()
  .then(data => {
    const markdown = generateMarkdown(data);

    return writeFileAsync('README.md', markdown);
  })
  .then(() => {
    console.log('Successfully wrote your README.md File');
  })
  .catch(err => console.log(err));