const same = require('./same');

describe('same', () => {
    it('returns true for empty arrays', () => {
        expect(same([], [])).toEqual(true);
    });
    it('returns true for ([1, 2, 3], [4, 1, 9])', () => {
        expect(same([1, 2, 3], [4, 1, 9])).toEqual(true);
    });
    it('returns false if arrays have different size', () => {
        expect(same([1], [])).toEqual(false);
    });
    it('returns false for ([1], [2])', () => {
        expect(same([1], [2])).toEqual(false);
    });
    it('returns false for ([1, 2, 3], [4, 4, 9])', () => {
        expect(same([1, 2, 3], [4, 4, 9])).toEqual(false);
    });
});