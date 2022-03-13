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
