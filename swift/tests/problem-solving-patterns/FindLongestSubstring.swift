//
//  FindLongestSubstring.swift
//  tests
//
//  Created by Volodymyr Myroniuk on 14.03.2024.
//

import XCTest

// Write a function called findLongestSubstring, which accepts a string
// and returns the length of the longest substring with all distinct characters.
//     findLongestSubstring('') // 0
//     findLongestSubstring('rithmschool') // 7
//     findLongestSubstring('thisisawesome') // 6
//     findLongestSubstring('thecatinthehat') // 7
//     findLongestSubstring('bbbbbb') // 1
//     findLongestSubstring('longestsubstring') // 8
//     findLongestSubstring('thisishowwedoit') // 6
//
// Time Complexity - O(n)
 
final class FindLongestSubstring: XCTestCase {
    func test() {
        XCTAssertEqual(findLongestSubstring(in: ""), 0)
        XCTAssertEqual(findLongestSubstring(in: "a"), 1)
        XCTAssertEqual(findLongestSubstring(in: "aa"), 1)
        XCTAssertEqual(findLongestSubstring(in: "ab"), 2)
        XCTAssertEqual(findLongestSubstring(in: "abc"), 3)
        XCTAssertEqual(findLongestSubstring(in: "rithmschool"), 7)
        XCTAssertEqual(findLongestSubstring(in: "thisisawesome"), 6)
        XCTAssertEqual(findLongestSubstring(in: "thecatinthehat"), 7)
        XCTAssertEqual(findLongestSubstring(in: "bbbbbb"), 1)
        XCTAssertEqual(findLongestSubstring(in: "longestsubstring"), 8)
        XCTAssertEqual(findLongestSubstring(in: "thisishowwedoit"), 6)
    }
    
    // MARK: - Solution
    
    private func findLongestSubstring(in string: String) -> Int {
        var maxLength = string.isEmpty ? 0 : 1
        var startIndex = string.startIndex
        
        while startIndex < string.endIndex {
            var endIndex = string.index(after: startIndex)
            while endIndex < string.endIndex {
                if string[startIndex..<endIndex].contains(string[endIndex]) {
                    break
                }
                endIndex = string.index(after: endIndex)
            }
            maxLength = max(maxLength, string.distance(from: startIndex, to: endIndex))
            guard endIndex < string.endIndex, let lastIndex = string[startIndex..<endIndex].lastIndex(of: string[endIndex]) else {
                return maxLength
            }
            startIndex = string.index(after: lastIndex)
        }
        
        return maxLength
    }
}
