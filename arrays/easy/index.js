export function findNumbers(nums) {
  return nums.reduce(
    (count, num) => (num.toString().length % 2 === 0 ? count + 1 : count),
    0
  );
}

export function sumZero(n) {
  const r = [];
  if (n % 2 !== 0) {
    r.push(0);
  }
  for (let index = 1; index <= Math.floor(n / 2); index++) {
    r.push(index, -index);
  }
  return r;
}

/**
 *
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @returns number
 */

export function busyWorker(startTime, endTime, queryTime) {
  return endTime.reduce(
    (count, ev, idx) =>
      ev >= queryTime && startTime[idx] <= queryTime ? ++count : count,
    0
  );
}

export function diStringMatch(s) {
  const sl = s.length;
  const perm = [];
  let left = 0;
  let right = sl;
  for (const ch of s) {
    perm.push(ch === "I" ? left++ : right--);
  }

  perm.push(s[sl - 1] === "I" ? right : left);

  return perm;
}
