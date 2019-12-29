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
  let i = 0
  while (i < nums.length) {
    if (target <= nums[i]) {
      break
    } else if (target > nums[i]) {
      i++
    }
  }
  return i
}
// @lc code=end
