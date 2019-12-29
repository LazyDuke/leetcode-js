/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  const len = nums.length

  if (len === 0) {
    return 0
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

  return left
}
// @lc code=end
