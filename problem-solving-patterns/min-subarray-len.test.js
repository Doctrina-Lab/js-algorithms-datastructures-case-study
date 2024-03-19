const minSubArrayLen = require('./min-subarray-len')

describe('minSubarrayLen', () => {
    it("returns 0 for empty input array", () => {
        expect(minSubArrayLen([], 42)).toEqual(0)
    })
    it("returns 0 for ([1, 2], 4)", () => {
        expect(minSubArrayLen([1, 2], 4)).toEqual(0)
    })
    it("returns 0 for ([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)", () => {
        expect(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)).toEqual(0)
    })
    it("returns 1 for ([1], 0)", () => {
        expect(minSubArrayLen([1], 0)).toEqual(1)
    })
    it("returns 1 for ([1], 1)", () => {
        expect(minSubArrayLen([1], 1)).toEqual(1)
    })
    it("returns 2 for ([2, 3, 1, 2, 4, 3], 7)", () => {
        expect(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)).toEqual(2)
    })
    it("returns 2 for ([2, 1, 6, 5, 4], 9)", () => {
        expect(minSubArrayLen([2, 1, 6, 5, 4], 9)).toEqual(2)
    })
    it("returns 1 for ([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)", () => {
        expect(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)).toEqual(1)
    })
    it("returns 3 for ([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)", () => {
        expect(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)).toEqual(3)
    })
    it("returns 5 for ([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)", () => {
        expect(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)).toEqual(5)
    })
    it("returns 2 for ([4, 3, 3, 8, 1, 2, 3], 11)", () => {
        expect(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)).toEqual(2)
    })
})