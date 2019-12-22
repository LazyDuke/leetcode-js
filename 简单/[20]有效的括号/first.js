/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const stack = []
  const map = new Map([
    ['(', ')'],
    ['{', '}'],
    ['[', ']']
  ])

  const arr = s.split('')

  for (let i = 0; i < arr.length; i++) {
    const cur = arr[i]
    if (map.get(stack[stack.length - 1]) === cur) {
      stack.pop()
    } else {
      stack.push(cur)
    }
  }

  return stack.length === 0
}
// @lc code=end
