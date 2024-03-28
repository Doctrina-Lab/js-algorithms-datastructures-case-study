const factorialIter = require('./factorial-iter')

describe('factorialIter', () => {
    it('returns 1 for 0!', () => {
        expect(factorialIter(0)).toEqual(1)
    })
    it('returns 1 for 1!', () => {
        expect(factorialIter(1)).toEqual(1)
    })
    it('returns 2 for 2!', () => {
        expect(factorialIter(2)).toEqual(2)
    })
    it('returns 6 for 3!', () => {
        expect(factorialIter(3)).toEqual(6)
    })
    it('returns 120 for 5!', () => {
        expect(factorialIter(5)).toEqual(120)
    })
})