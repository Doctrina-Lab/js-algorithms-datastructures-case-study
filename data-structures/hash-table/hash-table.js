class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size)
  }

  _hash(key) {
    let total = 0
    let WEIRD_PRIME = 31
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i]
      let charCode = char.charCodeAt(0) - 96
      total = (total * WEIRD_PRIME + charCode) % this.keyMap.length
    }
    return total
  }

  isEmpty() {
    return !this.keyMap.some(item => item !== undefined)
  }

  set(key, value) {
    // TODO: vova - overwrite values for existing keys
    let index = this._hash(key)
    if (!this.keyMap[index]) {
      this.keyMap[index] = []
    }
    this.keyMap[index].push([key, value])
  }

  get(key) {
    let index = this._hash(key)
    if (this.keyMap[index]) {
      let arr = this.keyMap[index]
      for (let i = 0; i < arr.length; i++) {
        if (arr[i][0] === key) {
          return arr[i][1]
        }
      }
    }
    return undefined
  }

  keys() {
    let keysArr = []
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; i++) {
          if (!keysArr.includes(this.keyMap[i][j][0])) {
            keysArr.push(this.keyMap[i][j][0])
          }
        }
      }
    }
    return valuesArr
  }

  values() {
    let valuesArr = []
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; i++) {
          if (!valuesArr.includes(this.keyMap[i][j][1])) {
            valuesArr.push(this.keyMap[i][j][1])
          }
        }
      }
    }
    return valuesArr
  }
}

module.exports = HashTable