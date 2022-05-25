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
  for (let i = 0; i < matrix.length; i++) {
    const min = Math.min(...matrix[i]);
    const idx = matrix[i].indexOf(min);

    if (matrix.every((arr) => arr[idx] <= min)) return [min];
  }

  return [];
}

function _projectionArea(grid) {
  const maxs = new Array(grid.length).fill(0);

  grid.forEach((row) =>
    row.forEach((val, idx) => {
      if (maxs[idx] < val) maxs[idx] = val;
    })
  );

  const z = grid.reduce(
    (prev, curr) => prev + curr.filter((val) => val !== 0).length,
    0
  );
  const y = grid.reduce((prev, curr) => prev + Math.max(...curr), 0);
  const x = maxs.reduce((prev, curr) => prev + curr, 0);

  return x + y + z;
}

export function minimumAbsDifference(arr) {
  let min = Number.MAX_VALUE;
  let result = [];
  const sArr = [...arr].sort((a, b) => a - b);
  for (let i = 1; i < sArr.length; i++) {
    const diff = sArr[i] - sArr[i - 1];
    if (diff < min) {
      min = diff;
      result = [[sArr[i - 1], sArr[i]]];
      console.log(result);
    } else if (diff == min) {
      result.push([sArr[i - 1], sArr[i]]);
    }
  }
  return result;
}
/**
 *
 * @param {number[][]} nums
 * @returns number[]
 */
export function intersection(nums) {
  return [
    ...Array.from(iMap(nums))
      .map((m) => (m[1] === nums.length ? m[0] : null))
      .filter(Boolean),
  ].sort((a, b) => a - b);
}

const iMap = (arr) =>
  arr.reduce((m, arr) => {
    for (const el of arr) {
      if (m.has(el)) {
        m.set(el, m.get(el) + 1);
      } else {
        m.set(el, 1);
      }
    }
    return m;
  }, new Map());
