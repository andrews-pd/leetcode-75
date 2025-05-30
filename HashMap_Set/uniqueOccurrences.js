/*
1207. Unique Number of Occurrences

Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.

 

Example 1:

Input: arr = [1,2,2,1,1,3]
Output: true
Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.
Example 2:

Input: arr = [1,2]
Output: false
Example 3:

Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
Output: true
 

Constraints:

1 <= arr.length <= 1000
-1000 <= arr[i] <= 1000

*/

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
  const ocurrences = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (ocurrences.get(arr[i]) > 0) {
      ocurrences.set(arr[i], (ocurrences.get(arr[i]) || 0) + 1);
    } else {
      ocurrences.set(arr[i], 1);
    }
  }
  
  return ocurrences.size === new Set(Array.from(ocurrences.values())).size;
};

module.exports = uniqueOccurrences;