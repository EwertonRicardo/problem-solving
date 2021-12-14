/**
 * Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.
*/

// LINK: https://leetcode.com/problems/squares-of-a-sorted-array/

/**
 * Time complexity: O(n log n)
 * Space complexity: O(n)
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
 const sortedSquares = function(nums) {
    
    const squareArr = [];
    
    for(let i = 0; i < nums.length; i++) {
        squareArr.push(Math.pow(nums[i], 2));
    }
    
    return squareArr.sort((a,b) => a - b);
};


/**
 * Time complexity: O(n)
 * Space complexity: O(n)
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortedSquares = function(nums) {
    
    let sortedResult = [];
    let left = 0;
    let right = nums.length - 1;
    let position = right
    
    while(left <= right) {
        if(Math.abs(nums[left]) > Math.abs(nums[right])) {
            sortedResult[position--] = nums[left++] ** 2;
        }else {
            sortedResult[position--] = nums[right--] ** 2;
        }
    }
    
    return sortedResult;
    
};