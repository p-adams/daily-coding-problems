// sliding window algorithms
// underscore prefix denotes brute force solution
export function __maxSumOfKConsecutiveElements(nums, k) {
  if (k > nums.length) {
    return 0;
  }
  let maxSum = -Infinity;
  let currSum;
  for (let i = 0; i <= nums.length - k; i++) {
    currSum = 0;
    for (let j = i; j < i + k; j++) {
      currSum += nums[j];
    }
    maxSum = Math.max(maxSum, currSum);
  }
  return maxSum;
}

export function maxSumOfKConsecutiveElements(nums, k) {
  let currSum = nums.slice(0, k).reduce((acc, curr) => acc + curr, 0);
  let maxSum = currSum;
  for (let i = 1; i <= nums.length - k; i++) {
    currSum -= nums[i - 1];
    currSum += nums[i + (k - 1)];
    maxSum = Math.max(maxSum, currSum);
  }
  return maxSum;
}
