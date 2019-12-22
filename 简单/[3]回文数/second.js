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
  if (x < 0) {
    return false
  } else if (x === 0) {
    return true
  } else if (x < 10) {
    return true
  } else {
    const x2Str = x.toString()
    const x2StrLen = x2Str.length
    const middleIndex = Math.floor(x2Str.length / 2)
    const arr = x2Str.split('')

    if (x2StrLen % 2 === 0) {
      const prevArr = arr.slice(0, middleIndex)
      const nextArr = arr.slice(middleIndex, x2StrLen)
      for (let i = 0; i < middleIndex; i++) {
        if (prevArr[i] !== nextArr[middleIndex - i - 1]) {
          return false
        }
      }
      return true
    } else {
      const prevArr = arr.slice(0, middleIndex)
      const nextArr = arr.slice(middleIndex + 1, x2StrLen)
      for (let i = 0; i < middleIndex; i++) {
        if (prevArr[i] !== nextArr[middleIndex - i - 1]) {
          return false
        }
      }
      return true
    }
  }
}
