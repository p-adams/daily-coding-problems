export function hourglassSum(m: number[][]): number {
  let max = -63;
  for (let r = 0; r < m.length - 2; r++) {
    for (let c = 0; c < m.length - 2; c++) {
      const fstRow = m[r][c] + m[r][c + 1] + m[r][c + 2];
      const scdRow = m[r + 1][c + 1];
      const trdRow = m[r + 2][c] + m[r + 2][c + 1] + m[r + 2][c + 2];
      const sum = fstRow + scdRow + trdRow;
      max = Math.max(max, sum);
    }
  }
  return max;
}

export function leftRotate(a: number[], d: number) {
  let i = 0;
  while (i < d) {
    const item = a.shift();
    if (item) {
      a.push(item);
    }
    i++;
  }
  return a;
}

export function newYearChaos(q: number[]): void {
  let bribes = 0;
  let chaotic = false;
  for (let i = q.length - 1; i >= 0; i--) {
    if (q[i] - i > 3) {
      chaotic = true;
    }
    for (let j = q[i] - 2; j < i; j++) {
      if (q[j] > q[i]) bribes++;
    }
  }
  console.log(chaotic ? "Too chaotic" : bribes);
}

export function intersection(a: number[], b: number[]): number[] {
  const result: number[] = [];
  let i = 0,
    j = 0;
  a.sort((a, b) => a - b);
  b.sort((a, b) => a - b);
  while (i < a.length && j < b.length) {
    if (a[i] === b[j]) {
      result.push(a[i]);
      i++;
      j++;
    } else if (a[i] < b[j]) {
      i++;
    } else {
      j++;
    }
  }

  return result;
}
// AKA sockMerchant
export function pairSum(a: number[]): number {
  return a.reduce<{
    map: Map<number, number>;
    sum: number;
  }>(
    (
      prev: {
        map: Map<number, number>;
        sum: number;
      },
      curr: number
    ) => {
      const { map } = prev;
      if (map.has(curr)) {
        const item = map.get(curr);
        if (item) {
          map.set(curr, item + 1);
        }
      } else {
        map.set(curr, 1);
      }
      return {
        ...prev,
        map,
        sum: Array.from(map.entries()).reduce((acc, item) => {
          const [_, key] = item;
          return acc + Math.floor(key / 2);
        }, 0),
      };
    },
    {
      map: new Map<number, number>(),
      sum: 0,
    }
  ).sum;
}

export function countingValleys(steps: string[]): number {
  let valleyCount = 0;
  let seaLevel = 0;
  for (let i = 0; i < steps.length; i++) {
    const step = steps[i];
    if (step === "U") {
      seaLevel++;
      if (seaLevel === 0) {
        valleyCount++;
      }
    } else {
      seaLevel--;
    }
  }

  return valleyCount;
}

export function jumpingOnClouds(clouds: number[]): number {
  let jumps = 0;
  let i = 0;
  while (i < clouds.length - 1) {
    if (i + 2 >= clouds.length || clouds[i + 2] === 1) {
      i += 1;
      jumps = jumps + 1;
    } else {
      i += 2;
      jumps = jumps + 1;
    }
  }

  return jumps;
}

export function containsDuplicates(nums: number[]): boolean {
  const sNums = nums.sort((a, b) => a - b);
  for (let i = 0; i < sNums.length - 1; i++) {
    if (sNums[i] === sNums[i + 1]) {
      return true;
    }
  }
  return false;
}

export function maxSubArray(nums: number[]): number {
  let bestMax = nums[0];
  let currentMax = nums[0];
  if (!nums.length) {
    return 0;
  }
  for (let i = 1; i < nums.length; i++) {
    currentMax = Math.max(nums[i], nums[i] + currentMax);
    bestMax = Math.max(bestMax, currentMax);
  }
  return bestMax;
}

export function maxConsecutiveOnes(nums: number[]): number {
  let maxSoFar = 0;
  let bestMax = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      maxSoFar += 1;
      bestMax = Math.max(bestMax, maxSoFar);
    } else {
      maxSoFar = 0;
    }
  }
  return bestMax;
}

export function singleNumber(nums: number[]): number {
  let unique = 0;
  for (let i = 0; i < nums.length; i++) {
    unique = unique ^ nums[i];
  }
  return unique;
}

export function plusOne(nums: number[]): number[] {
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] < 9) {
      nums[i]++;
      return nums;
    }
    nums[i] = 0;
  }
  return [1, ...nums];
}

export function containsDuplicates2(nums: number[]): boolean {
  return new Set([...nums]).size !== nums.length;
}

export function moveZeroes(nums: number[]) {
  for (let i = nums.length - 1; i >= 0; i--) {
    const current = nums[i];
    if (current === 0) {
      nums.splice(i, 1);
      nums.push(current);
    }
  }
  return nums;
}

export function rotateMatrix(matrix: number[][]): number[][] {
  if (!matrix.length) return [[]];
  const len = matrix.length;
  for (let i = 0; i < len / 2; i++) {
    // i = top
    // len - i - 1 = bottom
    for (let j = i; j < len - i - 1; j++) {
      const temp = matrix[i][j];
      // start cycle from bottom left-hand side of matrix
      matrix[i][j] = matrix[len - 1 - j][i];
      // swap bottom left for bottom right
      matrix[len - 1 - j][i] = matrix[len - 1 - i][len - 1 - j];
      // swap bottom right for top right
      matrix[len - 1 - i][len - 1 - j] = matrix[j][len - 1 - i];
      // swap top right for top left
      matrix[j][len - 1 - i] = temp;
    }
  }
  return matrix;
}

export function validSudoku(board: string[][]): boolean {
  for (let i = 0; i < 9; i++) {
    const row = new Set(),
      col = new Set(),
      box = new Set();

    for (let j = 0; j < 9; j++) {
      const _row = board[i][j];
      const _col = board[j][i];
      const _cell =
        board[3 * Math.floor(i / 3) + Math.floor(j / 3)][3 * (i % 3) + (j % 3)];

      if (_row != ".") {
        if (row.has(_row)) return false;
        row.add(_row);
      }
      if (_col != ".") {
        if (col.has(_col)) return false;
        col.add(_col);
      }

      if (_cell != ".") {
        if (box.has(_cell)) return false;
        box.add(_cell);
      }
    }
  }
  return true;
}

export function countingGoodSubstrings(s: string): number | undefined {
  let goodSubstringCount = 0;
  if (s.length < 3) {
    return goodSubstringCount;
  }
  for (let i = 0; i <= s.length - 3; i++) {
    const currentSubstring = s.substring(i, i + 3);
    // allocates new Set in each iteration, so may not be ideal from space complexity standpoint
    if (new Set(currentSubstring).size === currentSubstring.length)
      goodSubstringCount++;
  }

  return goodSubstringCount;
}

export function numUniqueEmails(emails: string[]): number {
  let uniqueEmails = 0;
  const map = new Map<string, string[]>();
  for (const email of emails) {
    const [local, domain] = email.split("@");
    const strippedLocalName = local.split(".").join("");
    const plusIndex = strippedLocalName.indexOf("+");
    const localName =
      plusIndex !== -1
        ? strippedLocalName.substring(0, plusIndex)
        : strippedLocalName;
    if (map.has(domain)) {
      const items = map.get(domain);
      if (items) {
        const item = items.find((i) => i === localName);
        if (!item) {
          uniqueEmails++;
          map.set(domain, items.concat(localName));
        }
      }
    } else {
      uniqueEmails++;
      map.set(domain, [localName]);
    }
  }

  return uniqueEmails;
}

export function __mergeSortedArrays(
  nums1: number[],
  m: number,
  nums2: number[],
  n: number
) {
  for (let i = 0; i < n; i++) {
    nums1[i + m] = nums2[i];
  }
  nums1.sort((a, b) => a - b);
  return nums1;
}

export function mergeSortedArrays(
  nums1: number[],
  m: number,
  nums2: number[],
  n: number
) {
  let i = m - 1;
  let j = n - 1;
  let lastIndex = m + n - 1;
  while (i >= 0 && j >= 0) {
    if (nums1[i] >= nums2[j]) {
      nums1[lastIndex] = nums1[i];
      i--;
    } else {
      nums1[lastIndex] = nums2[j];
      j--;
    }
    lastIndex--;
  }
  while (i >= 0) {
    nums1[lastIndex--] = nums1[i--];
  }
  while (j >= 0) {
    nums1[lastIndex--] = nums2[j--];
  }
  return nums1;
}

export function __maxProfit(prices: number[]): number {
  let max = 0;
  for (let i = 0; i < prices.length; i++) {
    const buy = prices[i];
    for (let j = i + 1; j < prices.length; j++) {
      const sell = prices[j];
      if (buy < sell) {
        const currMax = sell - buy;
        max = Math.max(max, currMax);
      }
    }
  }
  return max;
}

export function maxProfit(prices: number[]): number {
  let max = 0;
  let min = Number.MAX_VALUE;
  for (let i = 0; i < prices.length; i++) {
    min = Math.min(min, prices[i]);
    max = Math.max(max, prices[i] - min);
  }
  return max;
}

export function matrixReshape(
  mat: number[][],
  r: number,
  c: number
): number[][] {
  if (mat.length === 0 || r * c !== mat.length * mat[0].length) {
    return mat;
  }

  const res = new Array(r).fill(0).map((_) => new Array(c).fill(0));
  let row = 0,
    col = 0;
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++) {
      res[row][col++] = mat[i][j];
      if (col === c) {
        row++;
        col = 0;
      }
    }
  }

  return res;
}

export function __matrixSearch(matrix: number[][], target: number): boolean {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === target) {
        return true;
      }
    }
  }
  return false;
}

export function matrixSearch(matrix: number[][], target: number): boolean {
  const flattenedMatrix = matrix.flat();
  let low = 0;
  let high = flattenedMatrix.length - 1;
  while (low <= high) {
    const mid = Math.floor((high + low) / 2);
    if (flattenedMatrix[mid] === target) {
      return true;
    } else if (flattenedMatrix[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return false;
}
