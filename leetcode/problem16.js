// https://leetcode.com/problems/find-peak-element/description/
function findPeakElement(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] > nums[mid + 1]) {
            // The peak is in the left half (including mid)
            right = mid;
        } else {
            // The peak is in the right half (excluding mid)
            left = mid + 1;
        }
    }

    // When left == right, we have found the peak element
    return left;
}
