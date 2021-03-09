const inquirer = require("./inquirer");

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        console.log(`Name: ${this.name}`);
    }
    getID() {
        console.log(`ID: ${this.id}`);
    }
    getEmail() {
        console.log(`E-mail address: ${this.email}`);
    }
    getRole() {
        return "Employee"
    }
}

class Manager extends Employee {
    constructor(name, id, email, officeNum) {
        super(name, id, email);
        this.officeNum = officeNum
    }
    getOfficeNum() {
        console.log(`Office number: ${this.getOfficeNum}`)
    }
    getRole() {
        return "Manager"
    }
}