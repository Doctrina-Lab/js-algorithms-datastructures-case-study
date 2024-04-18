const fib = require('./fib')

describe('fib', () => {
    it('returns 0 for fib(0)', () => {
        expect(fib(0)).toEqual(0)
    })
    it('returns 1 for fib(1)', () => {
        expect(fib(1)).toEqual(1)
    })
    it('returns 1 for fib(2)', () => {
        expect(fib(2)).toEqual(1)
    })
    it('returns 2 for fib(3)', () => {
        expect(fib(3)).toEqual(2)
    })
    it('returns 3 for fib(4)', () => {
        expect(fib(4)).toEqual(3)
    })
    it('returns 5 for fib(5)', () => {
        expect(fib(5)).toEqual(5)
    })
    it('returns 8 for fib(6)', () => {
        expect(fib(6)).toEqual(8)
    })
    it('returns 13 for fib(7)', () => {
        expect(fib(7)).toEqual(13)
    })
    it('returns 21 for fib(8)', () => {
        expect(fib(8)).toEqual(21)
    })
    it('returns 34 for fib(9)', () => {
        expect(fib(9)).toEqual(34)
    })
    it('returns 55 for fib(10)', () => {
        expect(fib(10)).toEqual(55)
    })
    it('returns 317811 for fib(28)', () => {
        expect(fib(28)).toEqual(317811)
    })
    it('returns 9227465 for fib(35)', () => {
        expect(fib(35)).toEqual(9227465)
    })
})