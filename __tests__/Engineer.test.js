const {Engineer} = require('../lib/Engineer')

describe("Engineer", () => {
    it("Engineer's GitHub Username.", () => {
        const githubUsername = "channchealysek";
        const employee = new Engineer("Channchealy", 686428, "sek.channchealy@yahoo.com", githubUsername);

        expect(employee.githubUsername).toBe(githubUsername)

    });

    it("Check githubUsername() to see is working or not.", () =>{
        const githubUserName = "channchealysek";
        const employee = new Engineer("Channchealy", 686428, "sek.channchealy@yahoo.com", githubUserName);

        expect(employee.getGithubusername(githubUserName)).toBe(githubUserName)
    });

    it("Use getRole() function to return role as Engineer", () => {
        const role = "Engineer";
        const employee = new Engineer("Channchealy", 686428, "sek.channchealy@yahoo.com");

        expect(employee.getRole(role)).toBe(role);

    });
});