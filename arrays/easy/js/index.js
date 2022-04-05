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

export function finalPrices(prices) {
  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[j] <= prices[i]) {
        prices[i] = prices[i] - prices[j];
        break;
      }
    }
  }
  return prices;
}

export function sortArrayByParity(nums) {
  return [
    ...nums.filter((n) => n % 2 === 0),
    ...nums.filter((n) => n % 2 !== 0),
  ];
}

export function replaceElements(arr) {
  let max = -1;
  for (let i = arr.length - 1; i >= 0; --i) {
    const t = max;
    max = Math.max(max, arr[i]);
    arr[i] = t;
  }
  return arr;
}

export function heightChecker(heights) {
  const expected = [...heights].sort((a, b) => a - b);

  return heights.reduce(
    (count, height, idx) => (height !== expected[idx] ? ++count : count),
    0
  );
}
export function findFinalValue(nums, original) {
  const s = new Set(nums);
  while (true) {
    if (s.has(original)) {
      original *= 2;
    } else {
      break;
    }
  }

  return original;
}

export function smallestEqual(nums) {
  let smallest = Number.MAX_SAFE_INTEGER;
  for (const [idx, val] of nums.entries()) {
    if (idx % 10 === val) {
      smallest = Math.min(smallest, idx);
    }
  }
  return smallest === Number.MAX_SAFE_INTEGER ? -1 : smallest;
}

export function kthDistinct(arr, k) {
  const aMap = new Map();
  for (const v of arr) {
    if (aMap.has(v)) {
      aMap.set(v, aMap.get(v) + 1);
    } else {
      aMap.set(v, 1);
    }
  }

  const res = [...aMap].filter((v) => v[1] === 1);
  if (res.length >= k) {
    return res.slice(k - 1)[0][0];
  }
  return "";
}
