/*

345. Reverse Vowels of a String

Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

 

Example 1:

Input: s = "IceCreAm"

Output: "AceCreIm"

Explanation:

The vowels in s are ['I', 'e', 'e', 'A']. On reversing the vowels, s becomes "AceCreIm".

Example 2:

Input: s = "leetcode"

Output: "leotcede"

 

Constraints:

1 <= s.length <= 3 * 105
s consist of printable ASCII characters.


*/


/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  const vowels = ['A', 'a', 'E', 'e', 'I', 'i', 'O', 'o', 'U', 'u'];
  let vowelsPosition = [];
  let reverseVowelsWord = [];
  for(let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) {
      vowelsPosition[i] = s[i];
    } else {
      vowelsPosition[i] = undefined;
    }
  }
  
  let reverseVowelPosition = vowelsPosition.filter(function (e) {
    return e;
  }).reverse();
  
  let count = 0;
  for(let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) {
      reverseVowelsWord += reverseVowelPosition[count];
      count++;
    } 
    else {
      reverseVowelsWord += s[i];
    }
  }

  return reverseVowelsWord;
};

module.exports = reverseVowels;