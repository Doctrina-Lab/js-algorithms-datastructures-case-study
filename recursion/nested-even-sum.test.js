const nestedEvenSum = require('./nested-even-sum')

describe('nestedEvenSum', () => {
    it('returns 6', () => {
        const obj = {
            outer: 2,
            obj: {
                inner: 2,
                otherObj: {
                    superInner: 2,
                    notANumber: true,
                    alsoNotANumber: "yup"
                }
            }
        }

        expect(nestedEvenSum(obj)).toEqual(6)
    })

    it('returns 10', () => {
        const obj = {
            a: 2,
            b: {b: 2, bb: {b: 3, bb: {b: 2}}},
            c: {c: {c: 2}, cc: 'ball', ccc: 5},
            d: 1,
            e: {e: {e: 2}, ee: 'car'}
        }

        expect(nestedEvenSum(obj)).toEqual(10)
    })
})