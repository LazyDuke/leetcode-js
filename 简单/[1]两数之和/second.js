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
  let hashMap = {}
  for (let i = 0; i < nums.length; ++i) {
    hashMap[nums[i]] = i
  }
  for (let i = 0; i < nums.length; ++i) {
    if (
      hashMap[target - nums[i]] !== undefined &&
      hashMap[target - nums[i]] !== i
    ) {
      return [i, hashMap[target - nums[i]]]
    }
  }
}
