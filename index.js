const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
    'Please input the title of your project',
    'Please give a description of the product',
    'Please give instructions for the installation',
    'Please enter the usage information',
    'Please enter the contribution guidelines',
    'Please enter the test instructions',
    'Please choose one of the following licenses'
];

// TODO: Create a function to write README file
function writeToFile(response) {
  
fs.writeFile(`${response.projectTitle}.md`, generateMarkdown.generateMarkdown(response), (err) =>
err ? console.error(err) : console.log('Mission success human!')
);

console.log(response)
}

// TODO: Create a function to initialize app
function init() {

    inquirer
  .prompt([
    {
      type: 'input',
      message: questions[0],
      name: 'projectTitle',
    },
    {
      type: 'input',
      message: questions[1],
      name: 'description',
    },
    {
      type: 'input',
      message: questions[2],
      name: 'installationInstructions',
    },
    {
      type: 'input',
      message: questions[3],
      name: 'usageInformation',
    },
    {
      type: 'list',
      message: questions[6],
      name: 'license',
      choices: ["Apache-2.0", "GPL-2.0", "MIT", "MPL-2.0"]
    },
    {
      type: 'input',
      message: questions[4],
      name: 'contributionGuidelines',
    },
    {
      type: 'input',
      message: questions[5],
      name: 'testInstructions',
    },
   
  ])
  .then((response) => {
    
    writeToFile(response);
    
    module.exports = {response};

    return response
    
  
});

}
console.log("Grrrrr-eetings human. Welcome to the README generator bot. *bzz buzz* Please input information!")

// Function call to initialize app

init();


