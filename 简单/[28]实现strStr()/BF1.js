/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (needle.length === 0) {
    return 0
  }

  let i = 0
  let j = 0
  let k = i
  while (i < haystack.length && j < needle.length) {
    if (haystack[i] === needle[j]) {
      ++i
      ++j
    } else {
      j = 0
      i = ++k
    }
  }

  if (j === needle.length) {
    return k
  } else {
    return -1
  }
}
// @lc code=end
