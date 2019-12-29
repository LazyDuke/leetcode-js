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
  for (let i = 1; i < prices.length; i++) {
    const prev = prices[i - 1]
    const cur = prices[i]
    if (cur > prev) {
      max += cur - prev
    }
  }

  return max
}
// @lc code=end
