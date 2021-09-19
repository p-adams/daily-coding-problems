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
  while (
    i < a.sort((a, b) => a - b).length &&
    j < b.sort((a, b) => a - b).length
  ) {
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
  const items = new Map<number, number>();
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    if (items.has(a[i])) {
      const item = items.get(a[i]);
      if (item) {
        items.set(a[i], item + 1);
      }
    } else {
      items.set(a[i], 1);
    }
  }
  for (const item of items.values()) {
    sum += Math.floor(item / 2);
  }
  return sum;
}
