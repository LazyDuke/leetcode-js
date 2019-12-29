/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let max = 0
  const len = prices.length

  if (len === 0) {
    return max
  }

  let i = 0
  let valley = prices[0]
  let peak = prices[0]
  while (i < len - 1) {
    while (i < len - 1 && prices[i] >= prices[i + 1]) {
      i++
    }
    valley = prices[i]
    while (i < len - 1 && prices[i] <= prices[i + 1]) {
      i++
    }
    peak = prices[i]
    max += peak - valley
  }

  return max
}
// @lc code=end
