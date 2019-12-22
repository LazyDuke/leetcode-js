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

  const nextVal = getNextVal(needle)

  let i = 0
  let j = 0

  while (i < haystack.length && j < needle.length) {
    if (j === -1 || haystack[i] === needle[j]) {
      i++
      j++
    } else {
      j = nextVal[j]
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
  function getNextVal(str) {
    const nextVal = [-1, 0]
    // const next = [-1, 0]
    // next[0] = -1
    // next[1] = 0
    let j = 0
    let i = 1

    while (i < str.length - 1) {
      if (j === -1 || str[i] === str[j]) {
        ++j
        ++i
        // next[i] = j
        if (str[i] !== str[j]) {
          nextVal[i] = j // nextVal[i] = next[i]
        } else {
          nextVal[i] = nextVal[j] // nextVal[i] = nextVal[next[i]]
        }
      } else {
        j = nextVal[j]
      }
    }

    return nextVal
  }
}
// @lc code=end
