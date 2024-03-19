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
    it('returns 700 for ([100, 200, 300, 400], 2)', () => {
        expect(maxSubarraySum([100, 200, 300, 400], 2)).toEqual(700)
    })
    it('returns 39 for ([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)', () => {
        expect(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)).toEqual(39)
    })
    it('returns 5 for ([-3, 4, 0, -2, 6, -1], 2)', () => {
        expect(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)).toEqual(5)
    })
    it('returns 5 for ([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)', () => {
        expect(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)).toEqual(5)
    })
    it('returns null for ([2, 3], 3)', () => {
        expect(maxSubarraySum([2, 3], 3)).toEqual(null)
    })
})