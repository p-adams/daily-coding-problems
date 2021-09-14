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
