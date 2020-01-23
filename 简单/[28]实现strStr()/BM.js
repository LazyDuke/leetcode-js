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
  // 模式串长度 m
  const m = needle.length
  // 主串长度 n
  const n = haystack.length
  // 特殊情况排除
  if (m === 0) {
    return 0
  }
  // 生成”坏字符散列表“
  const bmBc = generateBmBc(needle)
  // 生成”好后缀规则“中的”prefix数组“和”suffix数组“
  const { prefix, suffix } = generateBmGs(needle)

  let i = 0
  // 外层循环，开始进行匹配
  while (i <= n - m) {
    let j
    // `模式串`从后往前与`主串`进行匹配
    for (j = m - 1; j >= 0; --j) {
      // 如果失配，记录位置j，退出内层循环
      if (haystack[i + j] !== needle[j]) {
        break
      }
    }
    // 如果模式串从前往后遍历了一遍，表示已经匹配
    if (j < 0) {
      return i
    }
    // 计算”坏字符规则“下需要移动的步数
    let x = j - bmBc[haystack.charCodeAt(i + j)]
    let y = 0
    if (j < m - 1) {
      // 计算”好后缀规则“下需要移动的步数
      y = moveByBmGs(j, m, suffix, prefix)
    }
    // 取最大值进行移动
    i = i + Math.max(x, y)
  }
  // 算法结束后仍无法匹配，返回 -1
  return -1

  /**
   * @param {string} needle
   * */
  function generateBmBc(needle) {
    const SIZE = 256
    const m = needle.length
    // 初始化散列表
    const bmBc = new Array(SIZE).fill(-1)
    for (let i = 0; i < m; ++i) {
      const ascii = needle.charCodeAt(i)
      // 表的key值是字符集里每个字符的ASCII码值，
      // value值是模式串中该字符的位置。
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

    // 初始化两个数组
    for (let i = 0; i < m; ++i) {
      suffix[i] = -1
      prefix[i] = false
    }
    // 遍历`模式串`的子串
    for (let i = 0; i < m - 1; ++i) {
      let j = i
      let k = 0
      // 只要公共后缀子串的长度为k
      while (j >= 0 && needle[j] === needle[m - 1 - k]) {
        // 由于 k 值记录下标从0开始，这里需要先++
        ++k
        // 记录下公共后缀子串的起始下标j
        suffix[k] = j
        // 继续比较下一位字符
        --j
      }

      // 如果j移动到了首位，表明公共后缀子串也是模式串的前缀子串
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
    // k 表示此时的好后缀长度
    let k = m - 1 - j
    // 如果在`模式串`中找到跟好后缀 S 相匹配的最后一个子串 S'
    if (suffix[k] !== -1) {
      return j - suffix[k] + 1
    }
    // 如果没找到，再寻找`模式串`的`前缀子串`中是否有和 `好后缀 S` 的`后缀子串`匹配的位置
    for (let r = j + 2; r <= m - 1; ++r) {
      if (prefix[m - r]) {
        return r
      }
    }
    // 如果仍然找不到
    return m
  }
}
// @lc code=end
