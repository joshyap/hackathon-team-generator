const fs = require('fs');
const inquirer = require('inquirer');
const ProjectManager = require('./lib/pm');
// const Designer = require('./lib/designer');
// const Frontend = require('./lib/frontend');
// const Backend = require('./lib/backend');
// const generatePage = require('./src/generate-page');

const team = [];

class Prompter {
    async startPrompt() {
        await inquirer
            .prompt([
                {
                    name: "pmName",
                    type: "input",
                    message: "Enter the project manager's name:",
                    validate: (nameInput) => {
                        if (nameInput) {
                            return true;
                        } else {
                            console.log("Please enter the project manager's name:");
                            return false;
                        }
                    }
                },
                {
                    name: "id",
                    type: "input",
                    message: "Enter the project manager's employee ID:",
                    validate: (emailInput) => {
                        if (emailInput) {
                            return true;
                        } else {
                            console.log("Please enter the project manager's employee ID:");
                            return false;
                        }
                    }
                },
                {
                    name: "email",
                    type: "input",
                    message: "Enter the project manager's email:",
                    validate: (emailInput) => {
                        if (emailInput) {
                            return true;
                        } else {
                            console.log("Please enter the project manager's email:");
                            return false;
                        }
                    }
                },
                {
                    name: "phone",
                    type: "input",
                    message: "Enter the project manager's phone number:",
                    validate: (phoneInput) => {
                        if (phoneInput) {
                            return true;
                        } else {
                            console.log("Please enter the project manager's phone number:");
                            return false;
                        }
                    }
                }
            ])
            .then((output) => {
                const projectManager = new ProjectManager(
                    output.pmName,
                    output.id,
                    output.email,
                    output.phone
                );
                team.push(projectManager);
                console.table(team);
            });
    }
}


const menuPrompt = new Prompter();

menuPrompt.startPrompt();