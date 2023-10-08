


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(index) {
  return `# ${index.projectTitle}


## Description
${index.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## <h2 id = "installation">Installation</h2>
${index.installationInstructions}

## <h2 id ="usage">Usage</h2>
${index.usageInformation}

## <h2 id = "license">License</h2>
${index.license}

## <h2 id ="contributing">Contributing</h2>
${index.contributionGuidelines}

## <h2 id = "tests">Tests</h2>
${index.testInstructions}

## <h2 id = "questions">Questions</h2>
My Github username is ${index.githubUser}.   
My github profile link is www.github.com/${index.githubUser}   
You can also contact me with any further questions at ${index.email}  
`;
}

module.exports = {
  generateMarkdown,
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection
}
