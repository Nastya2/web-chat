import { regular_login } from "./regular_expressions";

describe('check regular_login', () => {
    describe("match", function() {
        it("test1", () => {
            expect("login").toMatch(regular_login);
        });
    
        it("test2", () => {
            expect("login-726_49").toMatch(regular_login);
        });

        it("test3", () => {
            expect("Login").toMatch(regular_login);
        });

        it("test4", () => {
            expect("4nastYa").toMatch(regular_login);
        });
    });

    describe("no match", function() {
        let match: boolean = true;
        let login = "";
        const reg = new RegExp(regular_login);
        
        it("test1", function() {
            login = "настя";
            match = !!login.match(reg);
            expect(match).toBeFalse();
        });

        it("test2", function() {
            login = "nastya nastya";
            match = !!login.match(reg);
            expect(match).toBeFalse();
        });

        it("test2", function() {
            login = "n&h";
            match = !!login.match(reg);
            expect(match).toBeFalse();
        });
    });
});
