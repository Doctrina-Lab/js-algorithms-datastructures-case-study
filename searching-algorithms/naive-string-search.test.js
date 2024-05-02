const naiveStringSearch = require('./naive-string-search')

describe('naiveStringSearch', () => {
    it('returns 0 for empty inputs', () => {
        expect(naiveStringSearch("", "")).toEqual(0)
    })

    it('returns 2 for (wowomgzomg, omg)', () => {
        expect(naiveStringSearch("wowomgzomg", "omg")).toEqual(2)
    })

    it('returns 0 for (wowomgzomg, big)', () => {
        expect(naiveStringSearch("wowomgzomg", "big")).toEqual(0)
    })
})