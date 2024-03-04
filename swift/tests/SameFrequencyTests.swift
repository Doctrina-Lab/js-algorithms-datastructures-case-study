//
//  SameFrequencyTests.swift
//  tests
//
//  Created by Volodymyr Myroniuk on 02.03.2024.
//

import XCTest

// Write a function called `sameFrequency`.
// Given two positive integers, find out if the two numbers have the same frequency of digits.
//
// Your solution MUST have the following complexities:
// Time: O(N)
//
// Sample Input:
//   sameFrequency(182,281) // true
//   sameFrequency(34,14) // false
//   sameFrequency(3589578, 5879385) // true
//   sameFrequency(22,222) // false


final class SameFrequencyTests: XCTestCase {
    func test_returnsTrueForSameNumbers() {
        XCTAssertTrue(sameFrequency(123, 123))
    }
    
    func test_returnsTrueFor_182_281() {
        XCTAssertTrue(sameFrequency(182, 281))
    }
    
    func test_returnsTrueFor_3589578_5879385() {
        XCTAssertTrue(sameFrequency(3589578, 5879385))
    }
    
    func test_returnsFalseFor_34_14() {
        XCTAssertFalse(sameFrequency(34, 14))
    }
    
    func test_returnsFalseFor_22_222() {
        XCTAssertFalse(sameFrequency(22, 222))
    }
    
    // MARK: - Solution
    
    private func sameFrequency(_ number1: UInt, _ number2: UInt) -> Bool {
        if number1 == number2 { return true }
        
        func countDigits(for number: UInt) -> [UInt: UInt] {
            var digitCount: [UInt: UInt] = [:]
            var tempNumber = number
            
            while tempNumber > 0 {
                let digit = tempNumber % 10
                tempNumber /= 10
                digitCount[digit, default: 0] += 1
            }
            
            return digitCount
        }
        
        return countDigits(for: number1) == countDigits(for: number2)
    }
}
