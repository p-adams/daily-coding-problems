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

export function twoOutOfThree(nums1, nums2, nums3) {
  return [
    ...new Set([
      ...nums1.filter((n) => nums2.includes(n) || nums3.includes(n)),
      ...nums2.filter((n) => nums3.includes(n) || nums1.includes(n)),
    ]),
  ];
}

export function minCostToMoveChips(position) {
  const { odd, even } = position.reduce(
    (nObj, pos) => {
      return pos % 2 === 0
        ? { ...nObj, even: ++nObj.even }
        : { ...nObj, odd: ++nObj.odd };
    },
    { odd: 0, even: 0 }
  );

  return Math.min(odd, even);
}

export function canBeEqual(target, arr) {
  const sArr = [...arr].sort((a, b) => a - b);
  return [...target].sort((a, b) => a - b).every((v, i) => v === sArr[i]);
}

export function minSubsequence(nums) {
  if (nums.length === 1) return nums;

  nums.sort((a, b) => b - a);
  const sum = nums.reduce((acc, cur) => acc + cur);

  let runningSum = 0;
  for (let i = 0; i < nums.length; i++) {
    runningSum += nums[i];
    if (runningSum > sum - runningSum) {
      return nums.slice(0, i + 1);
    }
  }
}

export function uniqueOccurrences(arr) {
  const occ = getOccurrences();

  return occ.length === new Set(occ).size;

  function getOccurrences() {
    return [
      ...arr.reduce(
        (m, curr) =>
          m.has(curr) ? m.set(curr, m.get(curr) + 1) : m.set(curr, 1),
        new Map()
      ),
    ].map((m) => m[1]);
  }
}

export function sortByBits(arr) {
  const numOfBits = function (num) {
    const bits = num.toString(2).match(/1/g);
    return bits ? bits.length : 0;
  };
  return arr.sort((a, b) => numOfBits(a) - numOfBits(b) || a - b);
}
/**
 *
 * @param {number[]} target
 * @param {number} n
 * @returns string[]
 */
export function buildArray(target, n) {
  const arr = [];
  let i = 1;
  while (target[target.length - 1] >= i) {
    arr.push("Push");
    if (!target.includes(i)) {
      arr.push("Pop");
    }
    i++;
  }
  return arr;
}

export function calPoints(ops) {
  const sb = [];
  for (const op of ops) {
    switch (op) {
      case "+":
        sb.push(Number(sb[sb.length - 1]) + Number(sb[sb.length - 2]));
        break;
      case "D":
        sb.push(Number(sb[sb.length - 1] * 2));
        break;
      case "C":
        sb.pop();
        break;
      default:
        sb.push(Number(op));
        break;
    }
  }

  return sb.reduce((p, c) => p + c);
}

export function shortestToChar(s, c) {
  const index = [];
  for (const [ind, char] of s.split("").entries()) {
    if (char === c) index.push(ind);
  }

  const arr = [];
  for (const [ind, char] of s.split("").entries()) {
    if (char === c) arr.push(0);
    else arr.push(Math.min(...index.map((x) => Math.abs(ind - x))));
  }
  return arr;
}

export function sortArrayByParity2(nums) {
  const odds = nums.filter((n) => n % 2 !== 0);
  const evens = nums.filter((n) => n % 2 === 0);
  const res = [];
  for (const [i, _] of nums.entries()) {
    if (i % 2) {
      res.push(odds.pop());
    } else {
      res.push(evens.pop());
    }
  }
  return res;
}

export function peakIndexInMountainArray(arr) {
  let start = 0;
  let end = arr.length - 1;
  let mid;
  while (start <= end) {
    mid = Math.floor(start + (end - start) / 2);
    if (arr[mid] > arr[mid + 1] && arr[mid] > arr[mid - 1]) {
      return mid;
    } else if (arr[mid] > arr[mid + 1]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
}

export function countPrefixes(words, s) {
  return words.reduce(
    (count, word) => (s.startsWith(word) ? count + 1 : count),
    0
  );
}

export function countWords(words1, words2) {
  const wordMap = (arr) =>
    arr.reduce(
      (m, w) => (m.has(w) ? m.set(w, m.get(w) + 1) : m.set(w, 1)),
      new Map()
    );

  const wordMap1 = wordMap(words1);
  const wordMap2 = wordMap(words2);

  return Array.from(wordMap1).reduce(
    (count, [key, value] = entry) =>
      value === 1 && wordMap2.get(key) === 1 ? count + 1 : count,
    0
  );
}
