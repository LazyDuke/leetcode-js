/*
 * @lc app=leetcode.cn id=38 lang=javascript
 *
 * [38] 报数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  let result = '1'

  for (let i = 2; i <= n; i++) {
    result = countToSay(result)
  }

  return result

  function countToSay(count) {
    let say = ''
    let j = 0
    for (let i = 0; i < count.length; i++) {
      if (count[i + 1] !== count[i]) {
        say += `${j + 1}${count[i]}`
        j = 0
      } else {
        j++
      }
    }

    return say
  }
}
// @lc code=end
