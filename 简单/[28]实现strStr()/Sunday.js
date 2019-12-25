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

  const slen = haystack.length
  const plen = needle.length

  let i = 0
  let j = 0
  let m = plen
  let k

  while (i < slen) {
    if (haystack[i] !== needle[j]) {
      for (k = plen - 1; k >= 0; k--) {
        if (needle[k] === haystack[m]) {
          break
        }
      }

      i = m - k
      j = 0
      m = i + plen
      if (m > slen) {
        return -1
      }
    } else {
      if (j === plen - 1) {
        return i - j
      }
      i++
      j++
    }
  }

  return -1
}
// @lc code=end
