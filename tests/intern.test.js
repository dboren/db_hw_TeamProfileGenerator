const Intern = require("../lib/intern");

describe("Intern", () => {
    it("should contain the keys name, id, email, and school with values defined by the user", () => {
        const obj = new Intern("Tim", 3, "boy@wonder.net", "GCU");

        expect(obj.name).toBe("Tim");
        expect(obj.id).toBe(3);
        expect(obj.email).toBe("boy@wonder.net");
        expect(obj.school).toBe("GCU");
    })
});