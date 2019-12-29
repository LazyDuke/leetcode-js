/*
 * @lc app=leetcode.cn id=150 lang=javascript
 *
 * [150] 逆波兰表达式求值
 */

// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  const operation = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => Math.trunc(a / b)
  }
  const len = tokens.length
  const stack = []

  for (let i = 0; i < len; i++) {
    if (tokens[i] in operation) {
      const b = stack.pop()
      const a = stack.pop()
      const result = operation[tokens[i]](a, b)
      stack.push(result)
    } else {
      stack.push(+tokens[i])
    }
  }

  return stack.pop()
}
// @lc code=end
