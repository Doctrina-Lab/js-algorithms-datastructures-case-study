const someRecursive = require('./some-recursive')

describe('someRecursive', () => {
    let isOdd = num => num % 2 !== 0
    let isGreaterThatTen = num => num > 10 

    it('returns true when searches odd number in [1, 2, 3, 4]', () => {
        expect(someRecursive([1, 2, 3, 4], isOdd)).toEqual(true)
    })
    it('returns true when searches odd number in [4, 6, 8, 9]', () => {
        expect(someRecursive([4, 6, 8, 9], isOdd)).toEqual(true)
    })
    it('returns false when searches odd number in [4, 6, 8]', () => {
        expect(someRecursive([4, 6, 8], isOdd)).toEqual(false)
    })
    it('returns false when searches greater-than-10 number in [4, 6, 8]', () => {
        expect(someRecursive([4, 6, 8], isGreaterThatTen)).toEqual(false)
    })
})