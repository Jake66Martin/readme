


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
- Installation
- Usage
- License
- Contributing
- Tests
- Questions

## Installation
${index.installationInstructions}

## Usage
${index.usageInformation}

## License
${index.license}

## Contributing
${index.contributionGuidelines}

## Tests
${index.testInstructions}

## Questions
${index.description}
`;
}

module.exports = {
  generateMarkdown,
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection
}
