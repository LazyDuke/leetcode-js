/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  var num = x

  // 先判断一些显而易见的情况
  if (x < 0) {
    return false
  }
  if (x < 10) {
    return true
  }
  if (x % 10 === 0) {
    return false
  }

  let res = 0

  while (x) {
    res = res * 10 + (x % 10)
    x = parseInt(x / 10)
  }

  return res === num
}
