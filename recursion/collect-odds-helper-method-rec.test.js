const collectOdds = require('./collect-odds-helper-method-rec')

describe('collectOdds', () => {
    it('returns [1, 3, 5, 7, 9] for [1, 2, 3, 4, 5, 6, 7, 8, 9]', () => {
        expect(collectOdds([1, 2, 3, 4, 5, 6, 7, 8, 9])).toEqual([1, 3, 5, 7, 9])
    })
})