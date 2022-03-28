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

export function arrayPairSum(nums) {
  nums.sort((a, b) => a - b);
  let sum = 0;
  for (let i = 0; i < nums.length; i = i + 2) {
    sum += nums[i];
  }

  return sum;
}

export function sumOfUnique(nums) {
  const mm = new Map();
  for (const v of nums) {
    if (mm.has(v)) {
      const vv = mm.get(v);
      mm.set(v, vv + 1);
    } else {
      mm.set(v, 1);
    }
  }

  return [...mm]
    .filter((el) => el[1] === 1)
    .map((el) => el[0])
    .reduce((p, c) => p + c, 0);
}

export function repeatedNTimes(nums) {
  const m = new Map();
  for (const n of nums) {
    if (m.has(n)) {
      const v = m.get(n);
      m.set(n, v + 1);
    } else {
      m.set(n, 1);
    }
  }
  for (const [k, _] of m) {
    if (m.get(k) === nums.length / 2) {
      return k;
    }
  }
  return -1;
}