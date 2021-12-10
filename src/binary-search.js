/*
  Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums.
  If target exists, then return its index. Otherwise, return -1.
  You must write an algorithm with O(log n) runtime complexity.

*/

// Link - https://leetcode.com/problems/binary-search/

// Time complexity = O(log n)

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 const search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    
    while(left <= right) {
        let middle = Math.ceil((left + right) / 2);
        
        if(nums[middle] == target) {
            return middle
        }else if (target < nums[middle]) {
            right = middle - 1;
        } else {
            left = middle + 1;
        }
    }
    
    return -1;
}

console.log(search([-1,0,3,5,9,12, 18, 19], 9))
