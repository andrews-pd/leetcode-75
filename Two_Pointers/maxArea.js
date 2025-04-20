/*

11. Container With Most Water

You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

Example 2:

Input: height = [1,1]
Output: 1
 

Constraints:

n == height.length
2 <= n <= 105
0 <= height[i] <= 104

*/


/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let result = 0,
left = 0,
right = height.length - 1;

while (left < right) {
let smallestSide = Math.min(height[left], height[right]);
let area = (right - left) * smallestSide;

if (area > result) result = area;

if (height[left] < height[right]) left++;
else right--;
}

return result;
};

module.exports = maxArea;