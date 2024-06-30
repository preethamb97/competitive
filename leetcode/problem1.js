// TWO SUM https://leetcode.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let hashMap = {};
    for(let i = 0; i < nums.length;i++) {
        let checker = target - nums[i];
        if (hashMap[checker]) {
            return [hashMap[checker] - 1, i];
        }
        hashMap[nums[i]] = i+1;
    }
};