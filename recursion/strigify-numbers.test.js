const stringifyNumbers = require('./stringify-numbers')

describe('stringifyNumbers', () => {
    it('stringifies numbers', () => {
        let original = {
            num: 1,
            test: [],
            data: {
                val: 4,
                info: {
                    isRight: true,
                    random: 66
                }
            }
        }
        let expected = {
            num: "1",
            test: [],
            data: {
                val: "4",
                info: {
                    isRight: true,
                    random: "66"
                }
            }
        }
        expect(stringifyNumbers(original)).toEqual(expected)
    })
})