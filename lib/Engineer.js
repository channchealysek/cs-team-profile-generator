const Employee = require("./Employee")

class Engineer extends Employee {
    constructor(name, id, email, githubUsername) {
        super(name, id, email);
        this.githubUsername =  githubUsername;
        this.role = "Engineer";
    };

    getGithubusername = () => this.githubUsername;
    getRole = () => this.role;

};

module.exports = Engineer;