let nums = [1, 2, 3, 7, 6];

const heapify = (nums, n, i) => {
  let largest = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;

  if (left < n && nums[left] > nums[largest]) {
    largest = left;
  }

  if (right < n && nums[right] > nums[largest]) {
    largest = right;
  }

  if (largest != i) {
    let temp = nums[largest];
    nums[largest] = nums[i];
    nums[i] = temp;
    heapify(nums, n, largest);
  }
};

const maxHeap = (nums) => {
  let n = nums.length;

  let startIndex = Math.floor(n / 2) - 1;

  for (let i = startIndex; i >= 0; i--) {
    heapify(nums, n, i);
  }
};

maxHeap(nums);
console.log(nums);
