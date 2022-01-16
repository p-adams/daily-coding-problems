// Day 1: Binary Search
function binarySearch(nums, target) {
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
}
function binarySearchHelper(nums, start, end, target) {
  if (end >= start) {
    const mid = Math.floor((start + end) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      return binarySearchHelper(nums, start, mid - 1, target);
    } else {
      return binarySearchHelper(nums, mid + 1, end, target);
    }
  }
  return -1;
}
function binarySearch2(nums, target) {
  return binarySearchHelper(nums, 0, nums.length - 1, target);
}

function searchInsertPosition(nums, target) {
  let l = 0,
    r = nums.length - 1;
  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return l;
}

export const Day1 = {
  binarySearch,
  binarySearch2,
  searchInsertPosition,
};
