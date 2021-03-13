const inquirer = require("inquirer");
const fs = require('fs');

const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

const mgPrompts = [
    {
        type: 'input',
        name: 'name',
        message: 'Enter the name of the team manager:'
    },
    {
        type: 'input',
        name: 'id',
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
        name: 'id',
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
        message: 'Enter the name of this intern:'
    },
    {
        type: 'input',
        name: 'id',
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


function addEngineer() {
    inquirer.prompt(engPrompts)
    .then((data) => {
        //Might need to make this its own promise function
        const newEng = new Engineer(data.name, data.id, data.email, data.gitHub);
        console.log(newEng);

    });
}

function addIntern() {
    inquirer.prompt(intPrompts)
    .then((data) => {
        //Might need to make this its own promise function
        const newInt = new Intern(data.name, data.id, data.email, data.school);
        console.log(newInt);
    });
};

function addNew() {
    inquirer.prompt(newMemPrompts)
        .then(data => {
            console.log("data: " + data);
            console.log("object keys: " + Object.keys(data));
            console.log("type of data: " + typeof(data));
            let selection = data.role;
            console.log("selection:" + selection);
            console.log("newMemPrompts:" + newMemPrompts);
            switch (selection) {
                case 'engineer':
                    console.log("Role selected: " + selection);
                    addEngineer();
                    break;
                case 'intern':
                    console.log("Role selected: " + selection);
                    addIntern();
                    break;
                default:
                    console.log("it's defaulting for some reason");
                    break;
                
            }
        })
    // if (data = 'engineer') {
    //     console.log('employee type: ' + answers);
    //     addEngineer();
    // }
    // else if (data = 'intern') {
    //     console.log('employee type: ' + answers);
    //     addIntern();
    // }
}

function init() {
    inquirer.prompt(mgPrompts)
        .then((data) => {
            //Might need to make this its own promise function
            const teamMgr = new Manager(data.name, data.id, data.email, data.ofcNum);
            console.log(teamMgr);
            return teamMgr;
        })
        .then(() => {
            addNew();
            
        })

}

init();