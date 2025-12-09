const { minCoinChangeGreedy, coinChangeDynamic } = require('./coin-change')

describe('minCoinChangeGreedy', () => {
    it('returns [5, 5, 1] for coins [1, 2, 3, 4, 5] and amount 11', () => {
        expect(minCoinChangeGreedy([1, 2, 3, 4, 5], 11)).toEqual([5, 5, 1])
    })

    it('returns [25, 25, 25, 10] for coins [5, 10, 15, 20, 25] and amount 85', () => {
        expect(minCoinChangeGreedy([5, 10, 15, 20, 25], 85)).toEqual([25, 25, 25, 10])
    })

    it('returns [9, 1, 1] for coins [1, 5, 6, 9] and amount 11', () => {
        expect(minCoinChangeGreedy([1, 5, 6, 9], 11)).toEqual([9, 1, 1])
    })

    it('returns empty array for amount 0', () => {
        expect(minCoinChangeGreedy([1, 5, 10], 0)).toEqual([])
    })

    it('returns [25, 10, 10, 1, 1, 1, 1] for US coins and amount 49', () => {
        expect(minCoinChangeGreedy([1, 5, 10, 25], 49)).toEqual([25, 10, 10, 1, 1, 1, 1])
    })

    it('returns [10, 10, 5] for coins [1, 5, 10] and amount 25', () => {
        expect(minCoinChangeGreedy([1, 5, 10], 25)).toEqual([10, 10, 5])
    })

    it('returns [1] for coins [1] and amount 1', () => {
        expect(minCoinChangeGreedy([1], 1)).toEqual([1])
    })

    it('returns [1, 1, 1, 1, 1] for coins [1] and amount 5', () => {
        expect(minCoinChangeGreedy([1], 5)).toEqual([1, 1, 1, 1, 1])
    })

    it('returns [100, 50, 20, 10, 5, 2, 1] for coins [1, 2, 5, 10, 20, 50, 100] and amount 188', () => {
        expect(minCoinChangeGreedy([1, 2, 5, 10, 20, 50, 100], 188)).toEqual([100, 50, 20, 10, 5, 2, 1])
    })
})

describe('coinChangeDynamic', () => {
    it('returns 1 way for amount 0', () => {
        expect(coinChangeDynamic([1, 5, 10], 0)).toEqual(1)
    })

    it('returns 1 way for US coins and amount 1', () => {
        expect(coinChangeDynamic([1, 5, 10, 25], 1)).toEqual(1)
    })

    it('returns 2 ways for US coins and amount 5', () => {
        expect(coinChangeDynamic([1, 5, 10, 25], 5)).toEqual(2)
    })

    it('returns 4 ways for US coins and amount 10', () => {
        expect(coinChangeDynamic([1, 5, 10, 25], 10)).toEqual(4)
    })

    it('returns 13 ways for US coins and amount 25', () => {
        expect(coinChangeDynamic([1, 5, 10, 25], 25)).toEqual(13)
    })

    it('returns 39 ways for US coins and amount 45', () => {
        expect(coinChangeDynamic([1, 5, 10, 25], 45)).toEqual(39)
    })

    it('returns 242 ways for US coins and amount 100', () => {
        expect(coinChangeDynamic([1, 5, 10, 25], 100)).toEqual(242)
    })

    it('returns 0 ways when amount cannot be made', () => {
        expect(coinChangeDynamic([5, 10], 3)).toEqual(0)
    })

    it('returns 1 way for coins [1] and any amount', () => {
        expect(coinChangeDynamic([1], 5)).toEqual(1)
    })

    it('returns correct count for coins [1, 2] and amount 5', () => {
        // Ways: [1,1,1,1,1], [1,1,1,2], [1,2,2], = 3 ways
        expect(coinChangeDynamic([1, 2], 5)).toEqual(3)
    })
})
