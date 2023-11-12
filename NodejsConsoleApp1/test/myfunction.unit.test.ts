import multiply from '../myfunction';
import { suite, test } from '@testdeck/mocha';
import * as _chai from 'chai';
import { expect } from 'chai';

describe('multiply function', () => {
    it('multiplies two positive numbers', () => {
        expect(multiply(2, 3)).to.equal(6);
    });

    it('multiplies a positive and a negative number', () => {
        expect(multiply(2, -3)).to.equal(-6);
    });

    it('multiplies two negative numbers', () => {
        expect(multiply(-2, -3)).to.equal(6);
    });
});