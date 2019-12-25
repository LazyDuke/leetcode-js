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
  const m = needle.length
  const n = haystack.length

  if (m === 0) {
    return 0
  }

  const bmBc = generateBmBc(needle)
  const { prefix, suffix } = generateBmGs(needle)

  let i = 0
  while (i <= n - m) {
    let j
    for (j = m - 1; j >= 0; --j) {
      if (haystack[i + j] !== needle[j]) {
        break
      }
    }

    if (j < 0) {
      return i
    }

    let x = j - bmBc[haystack.charCodeAt(i + j)]
    let y = 0
    if (j < m - 1) {
      y = moveByBmGs(j, m, suffix, prefix)
    }

    i = i + Math.max(x, y)
  }

  return -1

  /**
   * @param {string} needle
   * */
  function generateBmBc(needle) {
    const m = needle.length
    const bmBc = new Array(SIZE).fill(-1)
    for (let i = 0; i < m; ++i) {
      const ascii = needle.charCodeAt(i)
      bmBc[ascii] = i
    }
    return bmBc
  }

  /**
   * @param {string} needle
   */
  function generateBmGs(needle) {
    const m = needle.length

    const suffix = []
    const prefix = []

    for (let i = 0; i < m; ++i) {
      suffix[i] = -1
      prefix[i] = false
    }

    for (let i = 0; i < m - 1; ++i) {
      let j = i
      let k = 0
      while (j >= 0 && needle[j] === needle[m - 1 - k]) {
        --j
        ++k
        suffix[k] = j + 1
      }

      if (j === -1) {
        prefix[k] = true
      }
    }

    return {
      prefix,
      suffix
    }
  }

  /**
   * @param {number} i
   * @param {number} m
   * @param {number[]} suffix
   * @param {boolean[]} prefix
   */
  function moveByBmGs(j, m, suffix, prefix) {
    let k = m - 1 - j
    if (suffix[k] !== -1) {
      return j - suffix[k] + 1
    }

    for (let r = j + 2; r <= m - 1; ++r) {
      if (prefix[m - r]) {
        return r
      }
    }

    return m
  }
}
// @lc code=end
