
const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.role = "Manager";
    }

    getRole() { return this.role };
}

managerInfo =
    [{
        type: "input",
        name: "managerName",
        message: "Input your manager's name:",
        validate: managerNameInput => {
            if (managerNameInput && managerNameInput.trim().length > 0) {
                return true;
            }
            else {
                return false;
            };
        }
    },

    {
        type: "input",
        name: "managerId",
        message: "Input your manager's id:",
        validate: managerId => {
            if (managerId && managerId.trim().length > 0) {
                return true;
            }
            else {
                return false;
            };
        }
    },

    {
        type: "input",
        name: "managerEmail",
        message: "Input your manager's email:",
        validate: managerEmail => {
            if (managerEmail && managerEmail.trim().length > 0) {
                return true;
            }
            else {
                return false;
            };
        }
    },

    {
        type: "input",
        name: "managerOfficenumber",
        message: "Input your manager's office number:",
        validate: managerOfficenumber => {
            if (managerOfficenumber && managerOfficenumber.trim().length > 0) {
                return true;
            }
            else {
                return false;
            };
        }
    }];

module.exports = { Manager, managerInfo };