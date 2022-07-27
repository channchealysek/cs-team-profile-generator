const inquirer = require('inquirer');
const { Manager } = require("./lib/Manager");
const { managerInfo } = require("./lib/Manager");

// Create array to hold team members.
let teamProfile = [];
function add2Pagehtml() {
    console.log(teamProfile);
}
init = () => {
    console.log("Please build your team.");
    inquirer.prompt(
        managerInfo
    )
    .then(function(_managerInfo){
        const managerName = _managerInfo.managerName;
        const managerId = _managerInfo.managerId;
        const managerEmail = _managerInfo.managerEmail;
        const managerOfficenumber = _managerInfo.managerOfficenumber;
        const teamMember = new Manager( managerName, managerId, managerEmail, managerOfficenumber );
        teamProfile.push(teamMember);
        add2Pagehtml();
    });
};

init();
