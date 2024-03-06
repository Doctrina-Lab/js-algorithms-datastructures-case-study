//
//  AveragePair.swift
//  tests
//
//  Created by Volodymyr Myroniuk on 06.03.2024.
//

import XCTest

// Write a function called averagePair.
// Given a sorted array of integers and a target average,
// determine if there is a pair of values in the array
// where the average of the pair equals the target average.
// There may be more than one pair that matches the average target.
//
// Sample Input:
//    averagePair([1,2,3],2.5) // true
//    averagePair([1,3,3,5,6,7,10,12,19],8) // true
//    averagePair([-1,0,3,4,5,6], 4.1) // false
//    averagePair([],4) // false
//
// Bonus Constraints:
//   Time: O(N)
//   Space: O(1)

final class AveragePair: XCTestCase {
    func test_returnsTrue() {
        XCTAssertTrue(averagePair(in: [1, 2, 3], target: 2.5))
        XCTAssertTrue(averagePair(in: [1, 3, 3, 5, 6, 7, 10, 12, 19], target: 8))
    }
    
    func test_returnsFalse() {
        XCTAssertFalse(averagePair(in: [-1, 0, 3, 4, 5, 6], target: 4.1))
        XCTAssertFalse(averagePair(in: [], target: 4))
    }
    
    // MARK: - Solution
    
    private func averagePair(in input: [Double], target: Double) -> Bool {
        var start = 0
        var end = input.count - 1
        while start < end {
            let average = (input[start] + input[end]) / 2.0
            if average == target {
                return true
            } else if average < target {
                start += 1
            } else {
                end -= 1
            }
        }
        return false
    }
}
