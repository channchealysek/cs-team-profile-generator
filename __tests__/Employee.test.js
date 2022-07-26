const Employee = require("../lib/Employee");

describe("Employee", () => {
    it("Create an employee object.", () => {
        const employee = new Employee("Channchealy", 686428, "sek.channchealy@yahoo.com");
    
        expect(typeof(employee)).toBe("object");
        expect(employee.name).toEqual(expect.any(String));
        expect(employee.id).toEqual(expect.any(Number));
        expect(employee.email).toEqual(expect.any(String));
    });
    
    it( "Check getName() to see is working or not.", () => {
        const name = "Channchealy";
        const employee = new Employee(name);
     
        expect( employee.getName()).toBe(name);
     });
    
     it( "Check getId() to see is working or not.", () => {
        const id = 686428;
        const employee = new Employee("Channchealy", 686428);
     
        expect( employee.getId()).toBe(id);
     });
    
     it( "Check getEmail() to see is working or not.", () => {
        const email = "sek.channchealy@yahoo.com";
        const employee = new Employee("Channchealy", 686428, email);
     
        expect( employee.getEmail()).toBe(email);
     });
    
     it( "Check getRole() to see is working or not.", () => {
        const role = "Employee";
        const employee = new Employee("Channchealy", 686428, "sek.channchealy@yahoo.com");
     
        expect( employee.getRole()).toBe(role);
     });
})