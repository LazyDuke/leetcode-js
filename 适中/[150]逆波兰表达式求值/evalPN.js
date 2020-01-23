/*
 * @lc app=leetcode.cn id=150 lang=javascript
 *
 * [150] 波兰表达式求值
 */

// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */
function evalPN(tokens) {
  const operation = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => Math.trunc(a / b)
  }
  const len = tokens.length
  const stack = []

  for (let i = len - 1; i > -1; i--) {
    if (tokens[i] in operation) {
      const a = stack.pop()
      const b = stack.pop()
      const result = operation[tokens[i]](a, b)
      stack.push(result)
    } else {
      stack.push(+tokens[i])
    }
  }

  return stack.pop()
}
// @lc code=end
