// majority element https://leetcode.com/problems/majority-element/?envType=study-plan-v2&envId=top-interview-150 
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let i = 0;
    let currentVal;
    let counter = 0;
    while (i < nums.length) {
        if (!currentVal) {
            currentVal = nums[i];
        }

        if (currentVal != nums[i]) {
            if (counter == 0) {
                counter++;
                currentVal = nums[i];
            } else {
                counter--;
            }
        } else {
            counter++;
        }
        i++;
    }

    return currentVal;
};