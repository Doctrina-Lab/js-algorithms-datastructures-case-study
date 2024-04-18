const capitalizeWords = require('./capitalize-words')

describe('capitalizeWords', () => {
    it('capitalizes words', () => {
        expect(capitalizeWords(["cat", "auto", "verse", "beer"])).toEqual(["CAT", "AUTO", "VERSE", "BEER"])
    })
})