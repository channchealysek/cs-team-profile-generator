const {Engineer} = require('../lib/Engineer')

describe("Engineer", () => {
    it("Engineer's GitHub Username.", () => {
        const githubUsername = "channchealysek";
        const engineer = new Engineer("Channchealy", 686428, "sek.channchealy@yahoo.com", githubUsername);

        expect(engineer.githubUsername).toBe(githubUsername)

    });

    it("Check githubUsername() to see is working or not.", () =>{
        const githubUserName = "channchealysek";
        const engineer = new Engineer("Channchealy", 686428, "sek.channchealy@yahoo.com", githubUserName);

        expect(engineer.getGithubusername()).toBe(githubUserName)
    });

    it("Use getRole() function to return role as Engineer", () => {
        const role = "Engineer";
        const engineer = new Engineer("Channchealy", 686428, "sek.channchealy@yahoo.com");

        expect(engineer.getRole()).toBe(role);

    });
});