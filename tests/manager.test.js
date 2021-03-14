const Manager = require("../lib/manager");

describe("Manager", () => {
    it("should contain the keys name, id, email, and officeNum with values defined by the user", () => {
        const obj = new Manager("Dan", 42, "dan@dan.net", 18);

        expect(obj.name).toBe("Dan");
        expect(obj.id).toBe(42);
        expect(obj.email).toBe("dan@dan.net");
        expect(obj.officeNum).toBe(18);
    })
});