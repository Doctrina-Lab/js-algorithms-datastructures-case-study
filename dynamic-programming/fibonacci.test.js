const { fibMemoization, fibTabulation } = require('./fibonacci')

describe('fibMemoization (dynamic programming)', () => {
    it('returns 1 for fibMemoization(1)', () => {
        expect(fibMemoization(1)).toEqual(1)
    })
    it('returns 1 for fibMemoization(2)', () => {
        expect(fibMemoization(2)).toEqual(1)
    })
    it('returns 2 for fibMemoization(3)', () => {
        expect(fibMemoization(3)).toEqual(2)
    })
    it('returns 3 for fibMemoization(4)', () => {
        expect(fibMemoization(4)).toEqual(3)
    })
    it('returns 5 for fibMemoization(5)', () => {
        expect(fibMemoization(5)).toEqual(5)
    })
    it('returns 8 for fibMemoization(6)', () => {
        expect(fibMemoization(6)).toEqual(8)
    })
    it('returns 13 for fibMemoization(7)', () => {
        expect(fibMemoization(7)).toEqual(13)
    })
    it('returns 21 for fibMemoization(8)', () => {
        expect(fibMemoization(8)).toEqual(21)
    })
    it('returns 34 for fibMemoization(9)', () => {
        expect(fibMemoization(9)).toEqual(34)
    })
    it('returns 55 for fibMemoization(10)', () => {
        expect(fibMemoization(10)).toEqual(55)
    })
    it('returns 6765 for fibMemoization(20)', () => {
        expect(fibMemoization(20)).toEqual(6765)
    })
    it('returns 75025 for fibMemoization(25)', () => {
        expect(fibMemoization(25)).toEqual(75025)
    })
    it('returns 9227465 for fibMemoization(35)', () => {
        expect(fibMemoization(35)).toEqual(9227465)
    })
})

describe('fibTabulation (dynamic programming)', () => {
    it('returns 1 for fibTabulation(1)', () => {
        expect(fibTabulation(1)).toEqual(1)
    })
    it('returns 1 for fibTabulation(2)', () => {
        expect(fibTabulation(2)).toEqual(1)
    })
    it('returns 2 for fibTabulation(3)', () => {
        expect(fibTabulation(3)).toEqual(2)
    })
    it('returns 3 for fibTabulation(4)', () => {
        expect(fibTabulation(4)).toEqual(3)
    })
    it('returns 5 for fibTabulation(5)', () => {
        expect(fibTabulation(5)).toEqual(5)
    })
    it('returns 8 for fibTabulation(6)', () => {
        expect(fibTabulation(6)).toEqual(8)
    })
    it('returns 13 for fibTabulation(7)', () => {
        expect(fibTabulation(7)).toEqual(13)
    })
    it('returns 21 for fibTabulation(8)', () => {
        expect(fibTabulation(8)).toEqual(21)
    })
    it('returns 34 for fibTabulation(9)', () => {
        expect(fibTabulation(9)).toEqual(34)
    })
    it('returns 55 for fibTabulation(10)', () => {
        expect(fibTabulation(10)).toEqual(55)
    })
    it('returns 6765 for fibTabulation(20)', () => {
        expect(fibTabulation(20)).toEqual(6765)
    })
    it('returns 75025 for fibTabulation(25)', () => {
        expect(fibTabulation(25)).toEqual(75025)
    })
    it('returns 9227465 for fibTabulation(35)', () => {
        expect(fibTabulation(35)).toEqual(9227465)
    })
})
