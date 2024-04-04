const power = require('./power')

describe('power', () => {
    it('returns 1 for power(2,0)', () => {
        expect(power(2, 0)).toEqual(1)
    })
})