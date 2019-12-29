/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  let y = x
  while (y * y > x) {
    y = Math.floor((y + x / y) / 2)
  }

  return y
}
// @lc code=end

/**
 * f(x) = x^2 - a
 * 根据斜率定义，有
 * f'(x0) = (f(x) - f(x0)) / (x - x0)
 * => f(x) = f(x0) + (x - x0)f'(x0)
 * 令 f(x) = 0，得
 * f(x0) + (x - x0)f'(x0) = 0
 * => x = x0 - f(x0) / f'(x0)
 * 将 f(x0) = x0^2 - a 代入
 * => x = x0 - (x0^2 - a) / 2x0 = 1 / 2 * (x0 + a / x0)
 * 即迭代公式为 x0 = 1 / 2 * (x0 + a / x0)
 */
