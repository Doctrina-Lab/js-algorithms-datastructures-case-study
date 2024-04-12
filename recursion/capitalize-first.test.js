const capitalizeFirst = require('./capitalize-first')

describe('capitalizeFirst', () => {
    it('returns [] for capitalizeFirst[]', () => {
        expect(capitalizeFirst([])).toEqual([])
    })
    it('returns [Car, Taco, Banana] for capitalizeFirst[car, taco, banana]', () => {
        expect(capitalizeFirst(['car', 'taco', 'banana'])).toEqual(['Car', 'Taco', 'Banana'])
    })
})