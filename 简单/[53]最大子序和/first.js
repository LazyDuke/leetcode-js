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
  if (len === 0) {
    return 0
  }

  let result = nums[0]

  for (let i = 0; i < len; i++) {
    let sum = nums[i]
    let subResult = sum
    for (let j = i + 1; j < len; j++) {
      sum += nums[j]
      subResult = sum > subResult ? sum : subResult
    }

    result = subResult > result ? subResult : result
  }

  return result
}
// @lc code=end
