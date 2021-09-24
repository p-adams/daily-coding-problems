// sliding window algorithms
// underscore prefix denotes brute force solution
export function __maxSumOfKConsecutiveElements(nums, k) {
  // input = [100, 200, 300, 400]
  // k = 2
  // output = 700
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
