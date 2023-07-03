// TODO: Create a function that returns a license badge based on which license is passed in
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function that returns a license badge based on which license is passed in
// TODO: Create a function that returns the license link
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let licenseBadge;
  switch (data.license) {
    case "MIT":
      licenseBadge =
        "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;
    case "Mozilla Public License 2.0":
      licenseBadge =
        "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
      break;
    case "Unlicense":
      licenseBadge =
        "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
      break;
    case "BSD-3-Clause":
      licenseBadge =
        "[![License: BSD-3-Clause](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
      break;
    default:
      licenseBadge = "";
  }

  return `# ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  - [User Story](#user-story)
  - [How to Complete the Challenge](#how-to-complete-the-challenge)
  - [Acceptance Criteria](#acceptance-criteria)
  - [Mock Up](#mock-up)
  - [GitHub Repository](#github-repository)
  - [Deployed Application](#deployed-application)
  - [Credits](#credits)
  - [License](#license)

  ## User Story
  ${data.userStory}

  ## How to Complete the Challenge
  ${data.howToComplete}

  ## Acceptance Criteria
  ${data.acceptanceCriteria}

  ## Mock Up
  ${data.mockUp}

  ## GitHub Repository
  [Repository Link](${data.githubRepo})

  ## Deployed Application
  [Application Link](${data.deployedApplication})

  ## Credits
  ${data.credits}

  ## License
  This project is licensed under the ${data.license} license.

  ${licenseBadge}
  `;
}

export { generateMarkdown };
