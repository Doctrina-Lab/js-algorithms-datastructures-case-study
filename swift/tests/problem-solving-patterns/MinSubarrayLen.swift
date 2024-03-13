//
//  MinSubarrayLen.swift
//  tests
//
//  Created by Volodymyr Myroniuk on 12.03.2024.
//

import XCTest

// Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.
// This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the
// integer passed to the function. If there isn't one, return 0 instead.
// Examples:
//     minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
//     minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
//     minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
//     minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
//     minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
//     minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
//     minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0
//
// Time Complexity - O(n)
// Space Complexity - O(1)

final class MinSubarrayLen: XCTestCase {
    func test() {
        XCTAssertEqual(minSubarrayLen(in: [], withSum: 3), 0)
        XCTAssertEqual(minSubarrayLen(in: [1], withSum: 2), 0)
        XCTAssertEqual(minSubarrayLen(in: [2], withSum: 2), 1)
        XCTAssertEqual(minSubarrayLen(in: [2, 3, 1, 2, 4, 3], withSum: 7), 2)
        XCTAssertEqual(minSubarrayLen(in: [2, 1, 6, 5, 4], withSum: 9), 2)
        XCTAssertEqual(minSubarrayLen(in: [3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], withSum: 52), 1)
        XCTAssertEqual(minSubarrayLen(in: [1, 4, 16, 22, 5, 7, 8, 9, 10], withSum: 39), 3)
        XCTAssertEqual(minSubarrayLen(in: [1, 4, 16, 22, 5, 7, 8, 9, 10], withSum: 55), 5)
        XCTAssertEqual(minSubarrayLen(in: [4, 3, 3, 8, 1, 2, 3], withSum: 11), 2)
        XCTAssertEqual(minSubarrayLen(in: [1, 4, 16, 22, 5, 7, 8, 9, 10], withSum: 95), 0)
    }
    
    // MARK: - Solution
    
    private func minSubarrayLen(in array: [Int], withSum expectedSum: Int) -> Int {
        var minLength = Int.max
        var start = 0
        var currentSum = 0
        
        for end in 0..<array.count {
            currentSum += array[end]
            
            while currentSum >= expectedSum {
                minLength = min(minLength, end - start + 1)
                currentSum -= array[start]
                start += 1
            }
        }
        
        return minLength == Int.max ? 0 : minLength
    }
}
