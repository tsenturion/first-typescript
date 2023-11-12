import getHiddenCard from '../myfunction';
import { suite, test } from '@testdeck/mocha';
import * as _chai from 'chai';
import { expect } from 'chai';


describe('Calculator Tests', () => {
    it('a', () => {
        const result = getHiddenCard('1234567812345678', 2);
        expect(result).to.equal('**5678');
    });

    it('b', () => {
        const result = getHiddenCard('1234567812345678', 3);
        expect(result).to.equal('***5678');
    });

    it('c', () => {
        const result = getHiddenCard('1234567812345678');
        expect(result).to.equal('****5678');
    });

    it('e', () => {
        const result = getHiddenCard('2034399002121100', 1);
        expect(result).to.equal('*1100');
    }
    
    )
});