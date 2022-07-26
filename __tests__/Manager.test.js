const Manager = require('../lib/Manager');

describe("Manager", () =>{
    it("Set Manager's  office number.", () => {

        const officeNumber = 684;
        const manager = new Manager("Channchealy", 686428, "sek.channchealy@yahoo.com", officeNumber);
    
        expect(manager.officeNumber).toBe(officeNumber);
    });
    
    it("Use getRole() function to return role as Manager", () => {
    
        const testRole = "Manager";
        const manager = new Manager("Channchealy", 686428, "sek.channchealy@yahoo.com");
    
        expect(manager.getRole()).toBe(testRole);
    });
});