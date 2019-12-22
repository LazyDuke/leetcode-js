/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let flag = x > 0
  let reverse = 0
  x = Math.abs(x) // 取绝对值

  while (x) {
    reverse = reverse * 10 + (x % 10)
    x = Math.floor(x / 10)
  }

  // 判断是否溢出
  if (reverse > Math.pow(2, 31) - 1) {
    return 0
  }

  if (!flag) {
    reverse = -reverse
  }

  return reverse
}
