/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let hashMap = new Map()
  for (let i = 0; i < nums.length; ++i) {
    let t = target - nums[i]
    if (hashMap.get(t) !== undefined) {
      return [hashMap.get(t), i]
    }
    hashMap.set(nums[i], i)
  }
}
