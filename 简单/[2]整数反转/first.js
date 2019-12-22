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
  const MIN = -Math.pow(2, 31)
  const MAX = Math.pow(2, 31) - 1

  const isNegative = x < 0

  const reverseAbsNum = parseInt(
    Math.abs(x)
      .toString()
      .split('')
      .reverse()
      .join('')
  )
  const reverseNum = isNegative ? -reverseAbsNum : reverseAbsNum

  return reverseNum < MIN || reverseNum > MAX ? 0 : reverseNum
}
