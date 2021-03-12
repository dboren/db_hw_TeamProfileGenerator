const inquirer = require("inquirer");
const fs = require('fs');

const Manager = require('./lib/manager');

const mgPrompts = [
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
];

const newMemPrompts = {
    type: 'list',
    choices: ['engineer', 'intern'],
    name: 'role',
    message: 'Is this employee an engineer or an intern?:'
}

const engPrompts = [
    {
        type: 'input',
        name: 'name',
        message: 'Enter the name of this engineer:'
    },
    {
        type: 'input',
        name: 'ID',
        message: 'Enter the ID number of this engineer:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter the e-mail address of this engineer:'
    },
    {
        type: 'input',
        name: 'gitHub',
        message: 'Enter the GitHub username of the this engineer:'
    }
];

const intPrompts = [
    {
        type: 'input',
        name: 'name',
        message: 'Enter the name of this itern:'
    },
    {
        type: 'input',
        name: 'ID',
        message: 'Enter the ID number of this intern:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter the e-mail address of this intern:'
    },
    {
        type: 'input',
        name: 'school',
        message: 'What school did this intern attend?:'
    }
];

// const teamMgr = new Manager(data.name, data.ID, data.email, data.ofcNum);

function addNew() {
    inquirer.prompt(newMemPrompts);
}

function init() {
    inquirer.prompt(mgPrompts)
        .then((data) => {
            const teamMgr = new Manager(data.name, data.ID, data.email, data.ofcNum);
            console.log(teamMgr);
        })
        addNew();

}

init();