const inquirer = require('inquirer');
const { Manager } = require("./lib/Manager");
const { managerInfo } = require("./lib/Manager");
const { Engineer } = require("./lib/Engineer");
const { engineerInfo } = require("./lib/Engineer");
const { Intern } = require("./lib/Intern");
const { internInfo } = require("./lib/Intern");

// Create array to hold team members.
let teamProfile = [];

function promptUserChoice() {
    return inquirer.prompt([
        {
            type: "list",
            name: "menuChoices",
            message: "Please choose an option below:",
            choices: ["Add an Engineer Profile", "Add an Intern Profile", "Done Generating Profiles"],
            validate: menuChoices => {
                if (menuChoices === "Add an Engineer Profile" || menuChoices === "Add an Intern Profile") {
                    return true;
                }
                else if (menuChoices === "Done Generating Profiles") {
                    return true;
                }
                else {
                    return false;
                };
            }
        }
    ]).then(function (_getUserChoiced) {
        userChoices(_getUserChoiced.menuChoices);
    });
};

function add2Pagehtml() {
    console.log(teamProfile);
};

function userChoices(choiced) {
    if (choiced === "Add an Engineer Profile") {
        getEngineerInfo();
    } else if (choiced === "Add an Intern Profile") {
        getInternInfo();
    } else {
        add2Pagehtml();
    }
}

function getManagerInfo() {
    inquirer.prompt(
        managerInfo
    )
        .then(function (_managerInfo) {
            const managerName = _managerInfo.managerName;
            const managerId = _managerInfo.managerId;
            const managerEmail = _managerInfo.managerEmail;
            const managerOfficenumber = _managerInfo.managerOfficenumber;
            const teamMember = new Manager(managerName, managerId, managerEmail, managerOfficenumber);
            teamProfile.push(teamMember);
            promptUserChoice();
        });
};

function getEngineerInfo() {
    inquirer.prompt(
        engineerInfo
    )
        .then(function (_engineerInfo) {
            const engineerName = _engineerInfo.engineerName;
            const engineerId = _engineerInfo.engineerId;
            const engineerEmail = _engineerInfo.engineerEmail;
            const githubUsername = _engineerInfo.githubUsername;
            const teamMember = new Engineer(engineerName, engineerId, engineerEmail, githubUsername);
            teamProfile.push(teamMember);
            promptUserChoice();
        });

};

function getInternInfo() {
    inquirer.prompt(
        internInfo
    )
        .then(function (_internInfo) {
            const internName = _internInfo.internName;
            const internId = _internInfo.internId;
            const internEmail = _internInfo.internEmail;
            const internSchool = _internInfo.internSchool;
            const teamMember = new Intern(internName, internId, internEmail, internSchool);
            teamProfile.push(teamMember);
            promptUserChoice();
        });
};

init = () => {
    console.log("Please build your team.");
    getManagerInfo();
};

init();
