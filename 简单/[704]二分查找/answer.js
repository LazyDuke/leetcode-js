/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  const len = nums.length

  if (nums.length === 0) {
    return -1
  }

  let left = 0
  let right = len

  while (left < right) {
    const mid = (left + right) >>> 1
    if (nums[mid] < target) {
      left = mid + 1
    } else {
      right = mid
    }
  }

  if (nums[left] !== target) {
    return -1
  }

  return left
}
// @lc code=end
