const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    };

    getSchool(school) { return school };
    getRole(role) { return role };

};

internInfo = [{
    type: "input",
    name: "internName",
    message: "Input intern's name:",
    validate: internName => {
        if (internName && internName.trim().length > 0) {
            return true;
        }
        else {
            return false;
        };
    }
},
{
    type: "input",
    name: "internId",
    message: "Input intern's employee ID:",
    validate: internId => {
        if (internId && internId.trim().length > 0) {
            return true;
        }
        else {
            return false;
        };
    }
},
{
    type: "input",
    name: "internEmail",
    message: "Input intern's email address:",
    validate: internEmail => {
        if (internEmail && internEmail.trim().length > 0) {
            // Check for valid email address format
            if (/^.+@.+\..+$/gi.test(internEmail)) {
                return true;
            };
        }
        else {
            return false;
        };
    }
},
{
    type: "input",
    name: "internSchool",
    message: "Input intern's school name:",
    validate: internSchool => {
        if (internSchool && internSchool.trim().length > 0) {
            return true;
        }
        else {
            return false;
        };
    }
}];

module.exports = { Intern, internInfo };
