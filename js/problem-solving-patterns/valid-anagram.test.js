const validAnagram = require('./valid-anagram');

describe('validAnagram', () => {
    it('returns true for empty inputs', () => {
        expect(validAnagram('', '')).toEqual(true);
    });
    it('returns false for different sizes', () => {
        expect(validAnagram('ab', 'a')).toEqual(false);
    });
    it('returns false for "aaz" vs "zza"', () => {
        expect(validAnagram('aaz', 'zza')).toEqual(false);
    });
    it('returns true for "anagram" vs "nagaram"', () => {
        expect(validAnagram('anagram', 'nagaram')).toEqual(true);
    });
    it('returns false for "rat" vs "car"', () => {
        expect(validAnagram('rat', 'car')).toEqual(false);
    });
    it('returns false for "awesome" vs "awesom"', () => {
        expect(validAnagram('awesome', 'awesom')).toEqual(false);
    });
    it('returns false for "amanaplanacanalpanama" vs "acanalmanplanpamana"', () => {
        expect(validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana')).toEqual(false);
    });
    it('returns true for "qwerty" vs "qeywrt"', () => {
        expect(validAnagram('qwerty', 'qeywrt')).toEqual(true);
    });
    it('returns true for "texttwisttime" vs "timetwisttext"', () => {
        expect(validAnagram('texttwisttime', 'timetwisttext')).toEqual(true);
    });
});