export function countNegatives(grid) {
  let c = 0;
  for (let i = 0; i < grid.length; ++i) {
    for (let j = 0; j < grid[0].length; ++j) {
      if (grid[i][j] < 0) {
        ++c;
      }
    }
  }
  return c;
}

export function kWeakestRows(mat, k) {
  return mat
    .map((row, index) => {
      return {
        count: row.filter(Boolean).length,
        index,
      };
    })
    .sort((a, b) => a.count - b.count)
    .map((el) => el.index)
    .slice(0, k);
}

export function maximumUnits(boxTypes, truckSize) {
  boxTypes.sort((a, b) => {
    return b[1] - a[1];
  });

  let i = 0;
  let sum = 0;
  while (truckSize > 0 && i < boxTypes.length) {
    if (truckSize >= boxTypes[i][0]) {
      sum += boxTypes[i][0] * boxTypes[i][1];
      truckSize -= boxTypes[i][0];
      i++;
    } else {
      sum += truckSize * boxTypes[i][1];
      truckSize -= boxTypes[i][0];
    }
  }
  return sum;
}

export function luckyNumbers(matrix) {
  return [];
}
