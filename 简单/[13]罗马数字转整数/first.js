/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const map = new Map([
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000]
  ])

  let sum = 0

  for (let i = 0; i < s.length; i++) {
    const curVal = map.get(s[i])

    if (i === s.length - 1) {
      sum += curVal
    } else {
      const nextVal = map.get(s[i + 1])

      if (curVal >= nextVal) {
        sum += curVal
      } else {
        sum -= curVal
      }
    }
  }

  return sum
}
// @lc code=end
