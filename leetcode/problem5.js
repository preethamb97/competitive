// 26. Remove Duplicates from Sorted Array https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let i = 1;
    let j = 1;
    while (i < nums.length) {
        let lastElement = nums[j - 1];
        if (lastElement == nums[i]) {
            i++;
        } else {
            nums[j] = nums[i];
            i++;
            j++;
        }
    }
    return j;
};