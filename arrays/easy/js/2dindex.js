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
