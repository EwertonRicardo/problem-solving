/*
LINK - https://leetcode.com/problems/search-insert-position/


Given a sorted array of distinct integers and a target value, return the index if the target is found. 
If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 const searchInsert = function(nums, target) {
    
    let start = 0;
    let end = nums.length - 1;
      
    while(start <= end) {
        
        let mid = Math.ceil((start + end) / 2);
        
        if(nums[mid] == target) {
            return mid;
        } else if(nums[mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
      return end + 1;
  
  };