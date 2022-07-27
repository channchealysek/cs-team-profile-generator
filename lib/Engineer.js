const Employee = require("./Employee")

class Engineer extends Employee {
    constructor(name, id, email, githubUsername) {
        super(name, id, email);
        this.githubUsername = githubUsername;
        this.role = "Engineer";
    };

    getGithubusername() { return this.githubUsername };
    getRole() { return this.role };

};

engineerInfo = [{
    type: "input",
    name: "engineerName",
    message: "Input engineer's name:",
    validate: engineerName => {
       if ( engineerName && engineerName.trim().length > 0 ) {
          return true;
       }
       else {
          return false;
       };
    }
 },
 {
    type: "input",
    name: "engineerId",
    message: "Input engineer's employee ID:",
    validate: engineerId => {
       if ( engineerId && engineerId.trim().length > 0 ) {
          return true;
       }
       else {
          return false;
       };
    }
 },
 {
    type: "input",
    name: "engineerEmail",
    message: "Input engineer's email address:",
    validate: engineerEmail => {
       if ( engineerEmail && engineerEmail.trim().length > 0 ) {
          // Check for valid email address format
          if ( /^.+@.+\..+$/gi.test( engineerEmail )) {
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
    name: "githubUsername",
    message: "Input engineer's Github username:",
    validate: githubUsername => {
       if ( githubUsername && githubUsername.trim().length > 0 ) {
          return true;
       }
       else {
          return false;
       };
    }
 }];

module.exports = {Engineer, engineerInfo};