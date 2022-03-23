export function restoreString(s: string, indices: number[]): string {
  return indices
    .map((index, i) => [index, s[i]])
    .sort((a: any, b: any) => a[0] - b[0])
    .reduce((prev: any, curr: any) => prev + curr[1], "");
}

export function createTargetArray(nums: number[], index: number[]): number[] {
  const target: number[] = [];
  for (let i = 0; i < nums.length; ++i) {
    target.splice(index[i], 0, nums[i]);
  }

  return target;
}

export function countMatches(
  items: string[][],
  ruleKey: "type" | "color" | "name",
  ruleValue: string
): number {
  let count = 0;

  return items.reduce((prev: any, curr: any) => {
    const [type, color, name] = curr;
    if (ruleKey === "type" && ruleValue === type) {
      ++count;
    } else if (ruleKey === "color" && ruleValue === color) {
      ++count;
    } else if (ruleKey === "name" && ruleValue === name) {
      ++count;
    }
    return count;
  }, 0);
}

class _OrderedStream {
  n: number;
  chunks: Record<string, string>;

  count: number;
  constructor(n: number) {
    this.n = n;
    this.chunks = {};

    this.count = 1;
  }
  insert(idKey: number, value: string): string[] {
    const result = [];
    this.chunks[idKey] = value;
    while (this.chunks[this.count] && this.count <= this.n) {
      result.push(this.chunks[this.count]);
      ++this.count;
    }
    return result;
  }
}

export function sumOddLengthSubarrays(arr: number[]): number {
  let sum = 0;

  for (let i = 0; i < arr.length; ++i) {
    let len = 0;
    let tSum = 0;

    for (let j = i; j < arr.length; ++j) {
      tSum += arr[j];
      ++len;
      if (len % 2 !== 0) {
        sum += tSum;
      }
    }
  }
  return sum;
}

export function countKDifference(nums: number[], k: number): number {
  let sum = 0;
  const mp = new Map();
  for (const num of nums) {
    if (mp.has(num)) {
      const v = mp.get(num);
      mp.set(num, v + 1);
    } else {
      mp.set(num, 1);
    }
  }

  for (const num of nums) {
    const diff = num - k;
    if (mp.has(diff)) {
      sum += mp.get(diff);
    }
  }

  return sum;
}

export function minMovesToSeat(seats: number[], students: number[]): number {
  const sortedSeats = [...seats].sort((a, b) => a - b);
  const sortedStudents = [...students].sort((a, b) => a - b);
  return sortedSeats.reduce((moves, _, index) => {
    return (moves += Math.abs(sortedSeats[index] - sortedStudents[index]));
  }, 0);
}

export function arrayStringsAreEqual(
  word1: string[],
  word2: string[]
): boolean {
  return word1.join("") === word2.join("");
}

export function countConsistentStrings(
  allowed: string,
  words: string[]
): number {
  return words.reduce(
    (count, curr) =>
      [...curr].every((ch) => allowed.includes(ch)) ? ++count : count,
    0
  );
}

export function maxProductDifference(nums: number[]): number {
  const sortedNums = [...nums].sort((a, b) => a - b);
  return (
    sortedNums[nums.length - 1] * sortedNums[nums.length - 2] -
    sortedNums[0] * sortedNums[1]
  );
}

export function countGoodTriplets(
  arr: number[],
  a: number,
  b: number,
  c: number
): number {
  let count = 0;
  for (let i = 0; i <= arr.length; ++i) {
    for (let j = i + 1; j <= arr.length; ++j) {
      for (let k = j + 1; k <= arr.length; ++k) {
        if (
          Math.abs(arr[i] - arr[j]) <= a &&
          Math.abs(arr[j] - arr[k]) <= b &&
          Math.abs(arr[i] - arr[k]) <= c
        ) {
          ++count;
        }
      }
    }
  }
  return count;
}

export function targetIndices(nums: number[], target: number): number[] {
  return [...nums]
    .sort((a, b) => a - b)
    .reduce(
      (result: number[], el: number, idx: number) =>
        el === target ? [...result, idx] : result,

      []
    );
}

function isPalindrome(s: string): boolean {
  for (let i = 0, j = s.length - 1; i < s.length && j >= 0; ++i, --j) {
    if (s[i] !== s[j]) {
      return false;
    }
  }
  return true;
}

export function firstPalindrome(words: string[]): string {
  return words.find((word) => isPalindrome(word)) ?? "";
}

export function countPairs(nums: number[], k: number): number {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    const curr = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      const next = nums[j];
      if (curr === next && (i * j) % k === 0) {
        ++count;
      }
    }
  }
  return count;
}

export function uniqueMorseRepresentations(words: string[]): number {
  const ABT = [
    ".-",
    "-...",
    "-.-.",
    "-..",
    ".",
    "..-.",
    "--.",
    "....",
    "..",
    ".---",
    "-.-",
    ".-..",
    "--",
    "-.",
    "---",
    ".--.",
    "--.-",
    ".-.",
    "...",
    "-",
    "..-",
    "...-",
    ".--",
    "-..-",
    "-.--",
    "--..",
  ];
  let str;
  const result = new Set<string>();
  for (const word of words) {
    str = "";
    for (let index = 0; index < word.length; index++) {
      const n = word.charCodeAt(index) - 97;
      str += ABT[n];
    }
    result.add(str);
  }

  return result.size;
}

export function largestAltitude(gain: number[]): number {
  let maxAlt = 0;
  let largest = 0;
  const alt = [];
  for (let i = 0; i < gain.length; ++i) {
    maxAlt += gain[i];
    largest = Math.max(largest, maxAlt);
    alt.push(maxAlt);
  }
  return largest;
}

export function subsetXORSum(nums: number[]): number {
  const len = nums.length;
  let bits = 0;
  for (let index = 0; index < nums.length; index++) {
    bits |= nums[index];
  }
  return bits * Math.pow(2, len - 1);
}

export function maxProduct(nums: number[]): number {
  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      max = Math.max(max, (nums[i] - 1) * (nums[j] - 1));
    }
  }
  return max;
}

export function minOperations(nums: number[]): number {
  return -1;
}
