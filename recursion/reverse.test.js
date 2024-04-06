const reverse = require('./reverse')

describe('reverse', () => {
    it('reverses awesome to emosewa', () => {
        expect(reverse('awesome')).toEqual('emosewa')
    })
    it('reverses rithmschool to loohcsmhtir', () => {
        expect(reverse('rithmschool')).toEqual('loohcsmhtir')
    })
})