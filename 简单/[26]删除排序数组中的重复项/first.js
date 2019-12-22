/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (nums.length === 0) {
    return 0
  }

  let i = 0
  while (i < nums.length - 1) {
    let j = i + 1
    if (nums[j] === nums[i]) {
      nums.splice(i, 1)
    } else {
      i++
    }
  }

  return nums.length
}
// @lc code=end
