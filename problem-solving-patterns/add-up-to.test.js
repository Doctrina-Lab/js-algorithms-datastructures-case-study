const addUpTo = require('./add-up-to');

describe('addUpTo', () => {
    it('adds up to 6', () => {
        expect(addUpTo(6)).toEqual(21);
    });
    it('adds up to 10', () => {
        expect(addUpTo(10)).toEqual(55);
    });
    it('adds up to 100', () => {
        expect(addUpTo(100)).toEqual(5050);
    });
    it('adds up to 10000', () => {
        expect(addUpTo(10000)).toEqual(50005000);
    });
});