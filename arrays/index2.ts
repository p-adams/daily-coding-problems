export function restoreString(s: string, indices: number[]): string {
  return indices
    .map((index, i) => [index, s[i]])
    .sort((a: any, b: any) => a[0] - b[0])
    .reduce((prev: any, curr: any) => prev + curr[1], "");
}

export function createTargetArray(nums: number[], index: number[]): number[] {
  return nums;
}
