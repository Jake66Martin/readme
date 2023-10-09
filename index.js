// These are the required lines for file system/inquirer/generateMarkdown.js
const fs = require('fs')
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');



// These are the questions to be answered within the prompt
const questions = [
    'Please input the title of your project',
    'Please give a description of the product',
    'Please give instructions for the installation',
    'Please enter the usage information',
    'Please enter the contribution guidelines',
    'Please enter the test instructions',
    'Please choose one of the following licenses',
    'Please enter your github user name',
    'Please enter your email'
];

// This is the function that writes the data to a markdown file
function writeToFile(response) {
  
fs.writeFile(`${response.projectTitle}.md`, generateMarkdown.generateMarkdown(response), (err) =>
err ? console.error(err) : console.log('Mission success human!')
);

console.log(response);
}

// This is the function that prompts the user to respond to the questions in order to use the data
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
      choices: ["Apache-2.0", "GPL-2.0", "MIT", "MPL-2.0", "No license"]
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
    {
      type: 'input',
      message: questions[7],
      name: 'githubUser',
    },
    {
      type: 'input',
      message: questions[8],
      name: 'email',
    },
   
  ])
  .then((response) => {
    
    generateMarkdown.renderLicenseBadge(response);
    generateMarkdown.renderLicenseLink(response);
    generateMarkdown.renderLicenseSection(response)
    writeToFile(response);
    
    module.exports = {response};
    

    return response;
    
  
});

}
console.log("Grrrrr-eetings human. Welcome to the README generator bot. *bzz buzz* Please input information!")



init();


