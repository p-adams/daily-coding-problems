// single loop sum
export function sum(list: Array<number>): number {
  let c = 0;
  for (const el of list) {
    c += el;
  }
  return c;
}
// recursive sum
export function reSum(list: Array<number>): number {
  const [h, ...t] = list;
  return !list.length ? 0 : h + reSum(t);
}

// Pascal's triangle
// given a number "rows", return first number of "rows" of
// Pascal's triangle
export function generateRows(rows = 1): number[][] {
  const result: number[][] = [];
  if (!rows) {
    return result;
  }
  for (let i = 0; i < rows; i++) {
    result[i] = [];
    result[i][0] = 1;
    for (let j = 1; j < i; j++) {
      result[i][j] = result[i - 1][j - 1] + result[i - 1][j];
    }
    result[i][i] = 1;
  }
  return result;
}

const stairs = new Map<number, number>();

function climb(n: number): number {
  let result = 0;
  if (stairs.has(n)) {
    return stairs.get(n) || 0;
  }
  if (n === 1) return 1;
  if (n === 2) return 2;
  result = climb(n - 1) + climb(n - 2);
  stairs.set(n, result);
  return result;
}

export function climbStairs(n: number): number | undefined {
  return climb(n);
}

export function guessNumber(n: number): number {
  return -1;
}
