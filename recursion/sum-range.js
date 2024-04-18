function sumRange(num) {
    if (num === 0) return 0
    if (num === 1) return 1
    return num + sumRange(num - 1)
}

module.exports = sumRange