export function findNumbers(nums) {
  return nums.reduce(
    (count, num) => (num.toString().length % 2 === 0 ? count + 1 : count),
    0
  );
}

export function sumZero(n) {
  return [];
}
