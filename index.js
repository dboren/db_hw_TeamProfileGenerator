const inquirer = require("inquirer");

function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Enter the name of the team manager:'
            },
            {
                type: 'input',
                name: 'ID',
                message: 'Enter the ID number of the team manager:'
            },
            {
                type: 'input',
                name: 'email',
                message: 'Enter the e-mail address of the team manager:'
            },
            {
                type: 'input',
                name: 'ofcNum',
                message: 'Enter the office number of the team manager:'
            }
        ])
}

init();