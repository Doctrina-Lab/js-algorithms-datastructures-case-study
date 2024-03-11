//
//  MaxSubarraySum.swift
//  tests
//
//  Created by Volodymyr Myroniuk on 09.03.2024.
//

import XCTest

// Given an array of integers and a number.
// Write a function called maxSubarraySum, which finds the maximum sum of a
// subarray with the length of the number passed to the function.
//
// Note that a subarray must consist of consecutive elements from the original array.
// In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.
//     maxSubarraySum([100,200,300,400], 2) // 700
//     maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)  // 39
//     maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
//     maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5
//     maxSubarraySum([2,3], 3) // null
//
// Constraints:
//     Time Complexity - O(N)
//     Space Complexity - O(1)
 
final class MaxSubarraySum: XCTestCase {
    
    func test() {
        XCTAssertEqual(maxSubarraySum(in: [100, 200, 300, 400], subarrayLength: 2), 700)
        XCTAssertEqual(maxSubarraySum(in: [1 ,4, 2, 10, 23, 3, 1, 0, 20], subarrayLength: 4), 39)
        XCTAssertEqual(maxSubarraySum(in: [-3, 4, 0, -2, 6, -1], subarrayLength: 2), 5)
        XCTAssertEqual(maxSubarraySum(in: [3, -2, 7, -4, 1, -1, 4, -2, 1], subarrayLength: 2), 5)
        XCTAssertEqual(maxSubarraySum(in: [2, 3], subarrayLength: 3), 0)
    }
    
    // MARK: - Solution
    
    private func maxSubarraySum(in array: [Int], subarrayLength: Int) -> Int {
        guard subarrayLength < array.count else { return 0 }
        
        var sum = 0
        var maxSum = sum
        var begin = 0
        var end = begin
        while end < subarrayLength && end < array.count {
            sum += array[end]
            end += 1
        }
        
        maxSum = sum
        while end < array.count {
            sum -= array[begin]
            begin += 1
            sum += array[end]
            end += 1
            maxSum = max(maxSum, sum)
        }
        return maxSum
    }
}
