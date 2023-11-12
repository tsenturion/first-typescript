import filterAnagrams from '../myfunction';
import { suite, test } from '@testdeck/mocha';
import * as _chai from 'chai';
import { expect } from 'chai';


describe('tests', () => {
    it('a', () => {
        const result = filterAnagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']);
        expect(result).to.deep.equal([ 'aabb', 'bbaa' ]);
    });

    it('b', () => {
        const result = filterAnagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']);
        expect(result).to.deep.equal([ 'carer', 'racer' ]);
    });

    it('c', () => {
        const result = filterAnagrams('laser', ['lazing', 'lazy', 'lacer']);
        expect(result).to.deep.equal([]);
    });
});