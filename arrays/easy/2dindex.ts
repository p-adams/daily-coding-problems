export function flipAndInvertimage(image: number[][]): number[][] {
  for (let i = 0; i < image.length; ++i) {
    image[i] = [...image[i]].reverse();
  }

  return image.map((el) => el.map((v) => (v === 1 ? 0 : 1)));
}

export function minTimeToVisitAllPoints(points: number[][]): number {
  let sum = 0;
  for (let i = 1; i < points.length; ++i) {
    sum += Math.max(
      Math.abs(points[i][0] - points[i - 1][0]),
      Math.abs(points[i][1] - points[i - 1][1])
    );
  }
  return sum;
}

export function diagonalSum(mat: number[][]): number {
  let sum = 0;
  let j = mat[0].length - 1;
  for (let i = 0; i < mat.length; ++i, --j) {
    if (i !== j) {
      sum += mat[i][j];
    }

    sum += mat[i][i];
  }
  return sum;
}

export function countGoodRectangles(rectangles: number[][]): number {
  const minValues = rectangles.map(([l, w]) => {
    return Math.min(l, w);
  });

  const maxLen = Math.max(...minValues);

  return minValues.reduce(
    (sum, value) => (value === maxLen ? sum + 1 : sum),
    0
  );
}

export function oddCells(m: number, n: number, indices: number[][]): number {
  const rows = Array(m).fill(0);
  const cols = Array(n).fill(0);
  for (const [x, y] of indices) {
    rows[x]++;
    cols[y]++;
  }
  const isOdd = (n: number) => n % 2 !== 0;
  const oddCols = cols.filter((c) => isOdd(c)).length;
  const oddRows = rows.filter((r) => isOdd(r)).length;

  return oddRows * n + oddCols * m - 2 * oddRows * oddCols;
}
