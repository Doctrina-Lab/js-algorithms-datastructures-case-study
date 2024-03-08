//
//  IsSubsequence.swift
//  tests
//
//  Created by Volodymyr Myroniuk on 07.03.2024.
//

import XCTest

// Write a function called isSubsequence which takes in two strings and checks
// whether the characters in the first string form a subsequence of the characters
// in the second string. In other words, the function should check whether the characters
// in the first string appear somewhere in the second string, without their order changing.
//
// Examples:
//     isSubsequence('hello', 'hello world'); // true
//     isSubsequence('sing', 'sting'); // true
//     isSubsequence('abc', 'abracadabra'); // true
//     isSubsequence('abc', 'acb'); // false (order matters)
//
// Your solution MUST have AT LEAST the following complexities:
//     Time Complexity - O(N + M)
//     Space Complexity - O(1)

final class IsSubsequence: XCTestCase {
    func test_returnsTrue() {
        XCTAssertTrue(isSubsequence("hello", "hello world"))
        XCTAssertTrue(isSubsequence("sing", "sting"))
        XCTAssertTrue(isSubsequence("abc", "abracadabra"))
        XCTAssertTrue(isSubsequence("", ""))
        XCTAssertTrue(isSubsequence("", "abc"))
    }
    
    func test_returnsFalse() {
        XCTAssertFalse(isSubsequence("abc", ""))
        XCTAssertFalse(isSubsequence("abc", "acb"))
    }
    
    // MARK: - Solution
    
    private func isSubsequence(_ s1: String, _ s2: String) -> Bool {
        guard !s1.isEmpty else { return true }
        
        var firstIndex = s1.startIndex
        for char in s2 where firstIndex != s1.endIndex {
            if s1[firstIndex] == char {
                firstIndex = s1.index(after: firstIndex)
            }
        }
        
        return firstIndex == s1.endIndex
    }
}
