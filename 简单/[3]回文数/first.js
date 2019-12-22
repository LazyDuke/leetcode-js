/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) {
    return false
  }

  const stringifiedX = x.toString()

  if (stringifiedX.length === 1) {
    return true
  }

  return (
    stringifiedX
      .split('')
      .reverse()
      .join('') === stringifiedX
  )
}
