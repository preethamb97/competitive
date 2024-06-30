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

/* STD

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let hashMap = new Map();
    for(let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (hashMap.has(complement)) {
            return [hashMap.get(complement), i];
        }
        hashMap.set(nums[i], i);
    }
};


/*

var twoSum = function(nums, target) {
    let hashMap = new Map();
    for(let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (hashMap.has(complement)) {
            return [hashMap.get(complement), i];
        }
        hashMap.set(nums[i], i);
    }
};

*/