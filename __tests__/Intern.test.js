const Intern = require( "../lib/Intern" );

describe("Intern", () =>{
    it("Intern school", () =>{
        const school = "Rice";
        const intern = new Intern("Channchealy", 686428, "sek.channchealy@yahoo.com", school);

        expect(intern.school).toBe(school);
    });

    it("Using getSchool() to set school", () =>{
        const school = "Rice";
        const intern = new Intern("Channchealy", 686428, "sek.channchealy@yahoo.com", school);

        expect(intern.getSchool()).toBe(school);
    });

    it("Use getRole() function to return role as Intern", () => {
        const role = "Intern";
        const intern = new Intern("Channchealy", 686428, "sek.channchealy@yahoo.com");

        expect(intern.getRole()).toBe(role);
    });
});