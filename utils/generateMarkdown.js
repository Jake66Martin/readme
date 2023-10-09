const apache = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
const gpl = "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
const mit = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
const mpl = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
let badge;
let disclaimer = "This applicaton is covered under "
let linkMessage = "For more information, follow the link below."
let link;




function renderLicenseBadge(response) {
  if (response.license === "Apache-2.0") {
  return link = "https://opensource.org/licenses/Apache-2.0";
  } else if (response.license === "GPL-2.0") {
    return link = "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html";
  } else if (response.license === "MIT") {
    return link = "https://opensource.org/licenses/MIT";
  } else if (response.license === "MPL-2.0") {
    return link = "https://opensource.org/licenses/MPL-2.0";
  } else if (response.license === "No license") {
    link = "";
  }
}


function renderLicenseLink(response) {
  if (response.license === "Apache-2.0") {
    return badge = apache;
    } else if (response.license === "GPL-2.0") {
      return badge = gpl;
    } else if (response.license === "MIT") {
      return badge = mit;
    } else if (response.license === "MPL-2.0") {
      return badge = mpl;
    } else if (response.license === "No license") {
      badge = "";
    }
}


function renderLicenseSection(response) {
  if (response.license === "Apache-2.0" || response.license === "GPL-2.0" || response.license === "MIT" || response.license === "MPL-2.0") {
  return
} else if (response.license === "No license") {
  disclaimer = "No license has been chosen for this project."
  linkMessage = "";
  response.license = "";
}

}





function generateMarkdown(index) {
  return `
 # ${index.projectTitle} ${badge}

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
${disclaimer}${index.license}.      
${linkMessage}      
${link}


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
