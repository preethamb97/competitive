/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let i = 0;
    let j = nums.length - 1;

    while (i < j) {
        if (nums[i] == val) {
            if (nums[j] == val) {
                j--;
                nums.pop();
            } else {
                let temp = nums[i];
                nums[i] = nums[j];
                nums[j] = temp;
                i++;
                j--;
                nums.pop();

            }

        } else {
            i++;
        }
    }
    if (i == j && val == nums[i]) {
        nums.pop();
    }
};


var removeElementOptimal = function (nums, val) {
    let i = 0;
    let n = nums.length;
    
    while (i < n) {
        if (nums[i] === val) {
            nums[i] = nums[n - 1];
            n--;
        } else {
            i++;
        }
    }
    
    return n;
};
