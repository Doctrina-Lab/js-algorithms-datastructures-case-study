const HashTable = require('./hash-table')

describe('HashTable', () => {
  it('creates empty hash table', () => {
    let sut = new HashTable()
    expect(sut.isEmpty()).toEqual(true)
  })

  it('sets 1 item', () => {
    let sut = new HashTable()
    sut.set('white', '#FFFFFF')
    expect(sut.get('white')).toEqual('#FFFFFF')
  })

  it('sets multiple items and resolves collisions', () => {
    let sut = new HashTable(1)
    sut.set('white', '#FFFFFF')
    sut.set('black', '#000000')
    sut.set('red', '#FF0000')
    sut.set('green', '#00FF00')
    sut.set('blue', '#0000FF')
    expect(sut.get('white')).toEqual('#FFFFFF')
    expect(sut.get('black')).toEqual('#000000')
    expect(sut.get('red')).toEqual('#FF0000')
    expect(sut.get('green')).toEqual('#00FF00')
    expect(sut.get('blue')).toEqual('#0000FF')
  })

  it('returns undefined for non-existed item', () => {
    let sut = new HashTable()
    sut.set('white', '#FFFFFF')
    expect(sut.get('black')).toEqual(undefined)
  })
})