import repeat from '../myfunction';
import { suite, test } from '@testdeck/mocha';
import * as _chai from 'chai';
import { expect } from 'chai';


describe('Calculator Tests', () => {
    it('a', () => {
        const result = repeat('a', 3);
        expect(result).to.equal('aaa');
    });

    it('b', () => {
        const result = repeat('b', 0);
        expect(result).to.equal('');
    });

    it('c', () => {
        const result = repeat('c', 1);
        expect(result).to.equal('c');
    });
});