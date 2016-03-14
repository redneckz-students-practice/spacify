import {describe, it} from 'mocha';
import {expect} from 'chai';
import './spacify';

describe('spacify', () => {
    it('should be defined for each String object', () => {
        expect('foo'.spacify).to.be.a('function');
    });

    it('should insert spaces between chars', () => {
        expect('Hello, World!'.spacify()).to.be.equal('H e l l o ,   W o r l d !');
    });

    it('should support unicode', () => {
        expect('\u00A9Бегуший с\u2702'.spacify()).to.be.equal('\u00A9 Б е г у ш и й   с \u2702');
    });

    it('should leave empty strings untouched', () => {
        expect(''.spacify()).to.be.equal('');
    });

    it('should leave one-char strings untouched', () => {
        expect('a'.spacify()).to.be.equal('a');
    });

    // Low-level requirement (remove 'skip' to enable it)
    it.skip('should be implemented by means of \'join\' function', () => {
        expect('foo'.spacify.toString()).to.contain('.join(');
    });
});
