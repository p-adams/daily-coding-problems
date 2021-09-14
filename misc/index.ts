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
export function generateRows(rows: number = 1): number[][] {
  return [[]];
}
