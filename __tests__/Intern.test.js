const { Intern } = require( "../lib/Intern" );

describe("Intern", () =>{
    it("Intern school", () =>{
        const school = "Rice";
        const employee = new Intern("Channchealy", 686428, "sek.channchealy@yahoo.com", school);

        expect(employee.school).toBe(school);
    });

    it("Using getSchool() to set school", () =>{
        const school = "Rice";
        const employee = new Intern("Channchealy", 686428, "sek.channchealy@yahoo.com", school);

        expect(employee.getSchool(school)).toBe(school);
    });

    it("Use getRole() function to return role as Intern", () => {
        const role = "Intern";
        const employee = new Intern("Channchealy", 686428, "sek.channchealy@yahoo.com");

        expect(employee.getRole(role)).toBe(role);
    });
});