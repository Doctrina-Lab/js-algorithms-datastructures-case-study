const kmpSearch = require('./kmp-string-search')

describe('kmpSearch', () => {
    it('returns 2 for (lolomglolololrofl, lolol)', () => {
        expect(kmpSearch("lolomglolololrofl", "lolol")).toEqual(2)
    })

    it('returns 1 for (lolomglololroflol, lolol)', () => {
        expect(kmpSearch("lolomglololroflol", "lolol")).toEqual(1)
    })
})