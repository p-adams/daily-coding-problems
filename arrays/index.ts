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
  const orderedA = a.sort((a, b) => a - b);
  const orderedB = b.sort((a, b) => a - b);
  while (i < orderedA.length && j < orderedB.length) {
    if (orderedA[i] === orderedB[j]) {
      result.push(orderedA[i]);
      i++;
      j++;
    } else if (orderedA[i] < orderedB[j]) {
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
