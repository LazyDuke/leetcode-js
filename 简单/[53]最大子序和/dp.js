/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  const len = nums.length
  let maxSum = nums[0]

  for (let i = 1; i < len; i++) {
    if (nums[i - 1] > 0) {
      nums[i] += nums[i - 1]
    }
    maxSum = Math.max(nums[i], maxSum)
  }

  return maxSum
}
// @lc code=end
