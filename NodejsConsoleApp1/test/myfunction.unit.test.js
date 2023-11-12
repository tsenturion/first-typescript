"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const myfunction_1 = require("../myfunction");
const chai_1 = require("chai");
describe('multiply function', () => {
    it('multiplies two positive numbers', () => {
        (0, chai_1.expect)((0, myfunction_1.default)(2, 3)).to.equal(6);
    });
    it('multiplies a positive and a negative number', () => {
        (0, chai_1.expect)((0, myfunction_1.default)(2, -3)).to.equal(-6);
    });
    it('multiplies two negative numbers', () => {
        (0, chai_1.expect)((0, myfunction_1.default)(-2, -3)).to.equal(6);
    });
});
//# sourceMappingURL=myfunction.unit.test.js.map