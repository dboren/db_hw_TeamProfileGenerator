const inquirer = require("inquirer");
const fs = require('fs');
const path = require('path')

const generateChart = require('./src/generatechart');
const generateMgr = require('./src/mgrtemp');

const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

// let teamMgr;
const engineers = [];
const interns = [];

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
    choices: ['engineer', 'intern', 'done - exit and generate'],
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

function printHTML(fileName, data) {
    console.log("printing HTML");
    console.log(data);
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
};

// function printMgr(data) {
//     const mgrEl = generateMgr(data);
//     console.log(mgrEl);
// };

function addEngineer() {
    inquirer.prompt(engPrompts)
    .then((data) => {
        const newEng = new Engineer(data.name, data.id, data.email, data.gitHub);
        console.log(newEng);
        engineers.push(newEng);
        console.info("Eng team: " + engineers.length);
    addNew();
    });
};

function addIntern() {
    inquirer.prompt(intPrompts)
    .then((data) => {
        const newInt = new Intern(data.name, data.id, data.email, data.school);
        console.log(newInt);
        interns.push(newInt);
        console.info("Int team: " + interns.length);
    addNew();
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
                case 'done - exit and generate':
                    console.log("Exiting menu");
                    console.log("data at write: " + Object.keys(data));
                    printHTML("myteam.html", generateChart({...data}));
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
            // const mgrEl = generateMgr(data);
            // console.log(mgrEL);
            return teamMgr;
        })
        .then(() => {
            addNew();
            
        })

}

init();