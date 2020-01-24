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

  let i = 0 // 主串位置指针
  let j = 0 // 模式串位置指针
  let m = plen // 每次重新匹配时，模式串尾部对应主串位置的下一位
  let k // 失配时模式串回溯位置指针

  while (i < slen) {
    // 如果失配
    if (haystack[i] !== needle[j]) {
      // 遍历模式串，查看模式串中是否包含m位置的字符
      for (k = plen - 1; k >= 0; k--) {
        if (needle[k] === haystack[m]) {
          break
        }
      }
      // 确定包含字符的位置，即确定模式串移动位置，重新开始匹配
      i = m - k
      j = 0
      m = i + plen
      // 如果m超出主串长度，表示模式串已经无法匹配
      if (m > slen) {
        return -1
      }
      // 如果匹配
    } else {
      // 如果j已经遍历一次模式串，表示模式串匹配完成
      if (j === plen - 1) {
        return i - j
      }
      // 未匹配完成则继续匹配
      i++
      j++
    }
  }

  return -1
}
// @lc code=end
