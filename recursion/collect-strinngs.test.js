const collectStrings = require('./collect-strings')

describe('collectStrings', () => {
    it('collects strings', () => {
        const obj = {
            stuff: "foo",
            data: {
                val: {
                    thing: {
                        info: "bar",
                        moreInfo: {
                            evenMoreInfo: {
                                weMadeIt: "baz"
                            }
                        }
                    }
                }
            }
        }
        expect(collectStrings(obj)).toEqual(["foo", "bar", "baz"])      
    })
})