/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  let left = 0
  let right = x / 2 + 1

  while (left < right) {
    const mid = (left + right + 1) >>> 1
    const square = mid * mid
    if (square > x) {
      right = mid - 1
    } else {
      left = mid
    }
  }

  return left
}
// @lc code=end
