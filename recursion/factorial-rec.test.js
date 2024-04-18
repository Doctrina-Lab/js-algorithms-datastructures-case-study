const factorialRec = require('./factorial-rec')

describe('factorialIter', () => {
    it('returns 1 for 0!', () => {
        expect(factorialRec(0)).toEqual(1)
    })
    it('returns 1 for 1!', () => {
        expect(factorialRec(1)).toEqual(1)
    })
    it('returns 2 for 2!', () => {
        expect(factorialRec(2)).toEqual(2)
    })
    it('returns 6 for 3!', () => {
        expect(factorialRec(3)).toEqual(6)
    })
    it('returns 120 for 5!', () => {
        expect(factorialRec(5)).toEqual(120)
    })
})