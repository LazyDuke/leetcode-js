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
  const SIZE = 256

  if (needle.length === 0) {
    return 0
  }

  const bmBc = preBmBc(needle)

  let i = 0
  while (i <= haystack.length - needle.length) {
    let j
    for (j = needle.length - 1; j >= 0; --j) {
      if (haystack[i + j] !== needle[j]) {
        break
      }
    }

    if (j < 0) {
      return i
    }

    i = i + (j - bmBc[haystack.charCodeAt(i + j)])
  }

  return -1

  /**
   * @param {string} needle
   * */
  function preBmBc(needle) {
    const bmBc = new Array(SIZE).fill(-1)
    for (let i = 0; i < needle.length; i++) {
      const ascii = needle.charCodeAt(i)
      bmBc[ascii] = i
    }
    return bmBc
  }
}
// @lc code=end
