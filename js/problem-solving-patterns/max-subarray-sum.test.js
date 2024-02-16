const maxSubarraySum = require('./max-subarray-sum')

describe('maxSubArraySum', () => {
    it('returns null for ([], 4)', () => {
        expect(maxSubarraySum([], 4)).toEqual(null)
    })
    it('returns 10 for ([1, 2, 5, 2, 8, 1, 5], 2)', () => {
        expect(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)).toEqual(10)
    })
    it('returns 17 for ([1, 2, 5, 2, 8, 1, 5], 4)', () => {
        expect(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)).toEqual(17)
    })
    it('returns 6 for ([4, 2, 1, 6], 1)', () => {
        expect(maxSubarraySum([4, 2, 1, 6], 1)).toEqual(6)
    })
    it('returns 13 for ([4, 2, 1, 6, 2], 4)', () => {
        expect(maxSubarraySum([4, 2, 1, 6, 2], 4)).toEqual(13)
    })
})