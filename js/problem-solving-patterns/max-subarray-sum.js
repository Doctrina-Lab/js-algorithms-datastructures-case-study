function maxSubarraySum(arr, num) {
    /* Write a function called `maxSubarraySum` which accepts an array of integers and a number called `n`.
     * The function should calculate the maximum sum of `n` consecutive elements in the array. 
     */
    if (arr.length < num) { return null }
    let maxSum = 0
    let tempSum = 0
    for (let i = 0; i < num; ++i) {
        maxSum += arr[i]
    }
    tempSum = maxSum
    for (let i = num; i < arr.length; ++i) {
        tempSum = tempSum - arr[i - num] + arr[i]
        maxSum = Math.max(maxSum, tempSum)
    }
    return maxSum
}

module.exports = maxSubarraySum