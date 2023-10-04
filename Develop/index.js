const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions1 = [
    'Please input the title of your project',
    'Please give a description of the product',
    'Please give instructions for the installation',
    'Please enter the usage information',
    'Please enter the contribution guidelines',
    'Please enter the test instructions'
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {

    inquirer
  .prompt([
    {
      type: 'input',
      message: questions1[0],
      name: 'projectTitle',
    },
    {
      type: 'input',
      message: questions1[1],
      name: 'description',
    },
    {
      type: 'input',
      message: questions1[2],
      name: 'installationInstructions',
    },
    {
        type: 'input',
        message: questions1[3],
        name: 'usageInformation',
      },
      {
        type: 'input',
        message: questions1[4],
        name: 'contributionGuidelines',
      },
      {
        type: 'input',
        message: questions1[5],
        name: 'testInstructions',
      },
  ])
  .then((response) => {
    const questionAnswers = [
        response.projectTitle,
        response.description,
        response.installationInstructions,
        response.usageInformation,
        response.contributionGuidelines,
        response.testInstructions,
    ]
    console.log(questionAnswers)
    return questionAnswers
  
});

}
console.log("Grrrrr-eetings human. Welcome to the README generator bot. *bzz buzz* Please input information!")

// Function call to initialize app
init();
