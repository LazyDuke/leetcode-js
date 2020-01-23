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
    let k = 0
    let j = 1

    while (j < str.length - 1) {
      if (k === -1 || str[j] === str[k]) {
        // next[j + 1] = k + 1

        // if (str[j + 1] !== str[next[j + 1]]) {
        //   nextVal[j + 1] = next[j + 1]
        // } else {
        //   nextVal[j + 1] = nextVal[next[j + 1]]
        // }

        // k++
        // j++

        k++
        j++

        if (str[j] !== str[k]) {
          nextVal[j] = k
        } else {
          nextVal[j] = nextVal[k]
        }
      } else {
        k = nextVal[k]
      }
    }

    return nextVal
  }
}
// @lc code=end
