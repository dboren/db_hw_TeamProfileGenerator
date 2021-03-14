const Engineer = require("../lib/engineer");

describe("Engineer", () => {
    it("should contain the keys name, id, email, and github with values defined by the user", () => {
        const obj = new Engineer("Angie", 5, "nano@carrier.net", "greygoo");

        expect(obj.name).toBe("Angie");
        expect(obj.id).toBe(5);
        expect(obj.email).toBe("nano@carrier.net");
        expect(obj.github).toBe("greygoo");
    })
});