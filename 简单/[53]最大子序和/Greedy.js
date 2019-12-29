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

  if (len === 1) {
    return nums[0]
  }

  let curSum = nums[0]
  let maxSum = nums[0]

  for (let i = 1; i < len; i++) {
    curSum = Math.max(nums[i], curSum + nums[i])
    maxSum = Math.max(maxSum, curSum)
  }

  return maxSum
}
// @lc code=end
