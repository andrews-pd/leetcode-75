/*
1657. Determine if Two Strings Are Close

Two strings are considered close if you can attain one from the other using the following operations:

Operation 1: Swap any two existing characters.
For example, abcde -> aecdb
Operation 2: Transform every occurrence of one existing character into another existing character, and do the same with the other character.
For example, aacabb -> bbcbaa (all a's turn into b's, and all b's turn into a's)
You can use the operations on either string as many times as necessary.

Given two strings, word1 and word2, return true if word1 and word2 are close, and false otherwise.

 

Example 1:

Input: word1 = "abc", word2 = "bca"
Output: true
Explanation: You can attain word2 from word1 in 2 operations.
Apply Operation 1: "abc" -> "acb"
Apply Operation 1: "acb" -> "bca"
Example 2:

Input: word1 = "a", word2 = "aa"
Output: false
Explanation: It is impossible to attain word2 from word1, or vice versa, in any number of operations.
Example 3:

Input: word1 = "cabbba", word2 = "abbccc"
Output: true
Explanation: You can attain word2 from word1 in 3 operations.
Apply Operation 1: "cabbba" -> "caabbb"
Apply Operation 2: "caabbb" -> "baaccc"
Apply Operation 2: "baaccc" -> "abbccc"
 

Constraints:

1 <= word1.length, word2.length <= 105
word1 and word2 contain only lowercase English letters.

*/

/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
  if (word1.length !== word2.length) return false;

  const count1 = new Map();
  const count2 = new Map();

  for (let i = 0; i < word1.length; i++) {
    count1.set(word1[i], (count1.get(word1[i]) || 0) + 1);
    count2.set(word2[i], (count2.get(word2[i]) || 0) + 1);
  }

  if (count1.size !== count2.size) return false;
  
  const values1 = Array.from(count1.values()).sort((a, b) => a - b);
  const values2 = Array.from(count2.values()).sort((a, b) => a - b);

  console.log('values1', values1);
  console.log('values2', values2);

  if (values1.join('') !== values2.join('')) return false;

  const keys1 = Array.from(count1.keys()).sort();
  const keys2 = Array.from(count2.keys()).sort();

  console.log('keys1', keys1);
  console.log('keys2', keys2);

  return keys1.join('') === keys2.join('');
};

module.exports = closeStrings;