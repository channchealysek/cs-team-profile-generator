const { Manager } = require("../lib/Manager");

describe("Manager", () =>{
    it("Set Manager's  office number.", () => {

        const officeNumber = 684;
        const employee  = new Manager("Channchealy", 686428, "sek.channchealy@yahoo.com", officeNumber);
    
        expect(employee.officeNumber).toBe(officeNumber);
    });
    
    it("Use getRole() function to return role as Manager", () => {
    
        const role = "Manager";
        const employee  = new Manager("Channchealy", 686428, "sek.channchealy@yahoo.com");
    
        expect(employee.getRole(role)).toBe(role);
    });
});