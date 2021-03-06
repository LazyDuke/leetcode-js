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

  const next = getNext(needle)

  let i = 0
  let j = 0

  while (i < haystack.length && j < needle.length) {
    if (j === -1 || haystack[i] === needle[j]) {
      i++
      j++
    } else {
      j = next[j]
    }
  }

  if (j === needle.length) {
    return i - j
  } else {
    return -1
  }

  /**
   * @param {string} str
   */
  function getNext(str) {
    const next = [-1, 0]

    let k = 0
    let j = 1

    while (j < str.length - 1) {
      if (k === -1 || str[j] === str[k]) {
        k++
        j++

        next[j] = k
      } else {
        k = next[k]
      }
    }

    return next
  }
}
// @lc code=end
