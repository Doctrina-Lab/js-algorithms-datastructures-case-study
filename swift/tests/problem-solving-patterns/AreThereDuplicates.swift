//
//  AreThereDuplicates.swift
//  tests
//
//  Created by Volodymyr Myroniuk on 05.03.2024.
//

import XCTest

// Implement a function called, areThereDuplicates which accepts
// a variable number of arguments, and checks whether there are
// any duplicates among the arguments passed in. You can solve
// this using the frequency counter pattern OR the multiple pointers pattern.
//
// Examples:
//     areThereDuplicates(1, 2, 3) // false
//     areThereDuplicates(1, 2, 2) // true
//     areThereDuplicates('a', 'b', 'c', 'a') // true
//
// Restrictions:
// Time - O(n)
// Space - O(n)
//
// Bonus:
// Time - O(n log n)
// Space - O(1)

final class AreThereDuplicates: XCTestCase {
    
    // Frequency Counter
    
    func test_areThereDuplicatesFrequencyCounterImplementation_returnsFalseForSingleArgument() {
        XCTAssertFalse(areThereDuplicatesFrequencyCounterImplementation(1))
    }
    
    func test_areThereDuplicatesFrequencyCounterImplementation_returnsFalseFor_12() {
        XCTAssertFalse(areThereDuplicatesFrequencyCounterImplementation(1, 2))
    }
    
    func test_areThereDuplicatesFrequencyCounterImplementation_returnsFalseFor_123() {
        XCTAssertFalse(areThereDuplicatesFrequencyCounterImplementation(1, 2, 3))
    }
    
    func test_areThereDuplicatesFrequencyCounterImplementation_returnsTrueFor_112() {
        XCTAssertTrue(areThereDuplicatesFrequencyCounterImplementation(1, 1, 2))
    }
    
    func test_areThereDuplicatesFrequencyCounterImplementation_returnsTrueFor_122() {
        XCTAssertTrue(areThereDuplicatesFrequencyCounterImplementation(1, 2, 2))
    }
    
    // Multiple Pointers
    
    func test_areThereDuplicatesMultiplePointersImplementation_returnsFalseForSingleArgument() {
        XCTAssertFalse(areThereDuplicatesMultiplePointersImplementation(1))
    }
    
    func test_areThereDuplicatesMultiplePointersImplementation_returnsFalseFor_12() {
        XCTAssertFalse(areThereDuplicatesMultiplePointersImplementation(1, 2))
    }
    
    func test_areThereDuplicatesMultiplePointersImplementation_returnsFalseFor_123() {
        XCTAssertFalse(areThereDuplicatesMultiplePointersImplementation(1, 2, 3))
    }
    
    func test_areThereDuplicatesMultiplePointersImplementation_returnsTrueFor_112() {
        XCTAssertTrue(areThereDuplicatesMultiplePointersImplementation(1, 1, 2))
    }
    
    func test_areThereDuplicatesMultiplePointersImplementation_returnsTrueFor_122() {
        XCTAssertTrue(areThereDuplicatesMultiplePointersImplementation(1, 2, 2))
    }
    
    // One Liner
    
    func test_areThereDuplicatesOneLinerImplementation_returnsFalseForSingleArgument() {
        XCTAssertFalse(areThereDuplicatesOneLinerImplementation(1))
    }
    
    func test_areThereDuplicatesOneLinerImplementation_returnsFalseFor_12() {
        XCTAssertFalse(areThereDuplicatesOneLinerImplementation(1, 2))
    }
    
    func test_areThereDuplicatesOneLinerImplementation_returnsFalseFor_123() {
        XCTAssertFalse(areThereDuplicatesOneLinerImplementation(1, 2, 3))
    }
    
    func test_areThereDuplicatesOneLinerImplementation_returnsTrueFor_112() {
        XCTAssertTrue(areThereDuplicatesOneLinerImplementation(1, 1, 2))
    }
    
    func test_areThereDuplicatesOneLinerImplementation_returnsTrueFor_122() {
        XCTAssertTrue(areThereDuplicatesOneLinerImplementation(1, 2, 2))
    }
    
    // MARK: - Solution
    
    private func areThereDuplicatesFrequencyCounterImplementation<T: Hashable>(_ arguments: T...) -> Bool {
        var frequencyCounter: [T: Int] = [:]
        for argument in arguments {
            frequencyCounter[argument, default: 0] += 1
        }
        for value in frequencyCounter.values {
            if value > 1 {
                return true
            }
        }
        return false
    }
    
    private func areThereDuplicatesMultiplePointersImplementation<T: Comparable>(_ arguments: T...) -> Bool {
        let sortedArguments = arguments.sorted()
        var start = 0
        var next = 1
        while next < sortedArguments.count {
            if sortedArguments[start] == sortedArguments[next] {
                return true
            }
            start += 1
            next += 1
        }
        return false
    }
    
    private func areThereDuplicatesOneLinerImplementation<T: Hashable>(_ arguments: T...) -> Bool {
        Set(arguments).count != arguments.count
    }
}
