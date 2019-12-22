/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length === 0) {
    return ''
  }

  return _longestCommonPrefix(strs, 0, strs.length - 1)

  /**
   * @description
   * @author Lazy Duke
   * @date 2019-12-21
   * @param {string[]} strs
   * @param {number} l
   * @param {number} r
   */
  function _longestCommonPrefix(strs, l, r) {
    if (l === r) {
      return strs[l]
    } else {
      const mid = Math.floor((l + r) / 2)
      const lcpLeft = _longestCommonPrefix(strs, l, mid)
      const lcpRight = _longestCommonPrefix(strs, mid + 1, r)

      return commonPrefix(lcpLeft, lcpRight)
    }
  }
  l
  /**
   * @description
   * @author Lazy Duke
   * @date 2019-12-21
   * @param {string} left
   * @param {string} right
   */
  function commonPrefix(left, right) {
    const min = Math.min(left.length, right.length)
    for (let i = 0; i < min; i++) {
      if (left[i] !== right[i]) {
        return left.substring(0, i)
      }
    }

    return left.substring(0, min)
  }
}
// @lc code=end
