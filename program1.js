const getTotalIsles = function (grid) {
  if (grid.length === 0) return 0;

  let count = 0;
  const rows = grid.length;
  const cols = grid[0].length;

  function dfs(r, c) {
    if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] === 'w') {
      return;
    }

    grid[r][c] = 'w'; // Mark the current cell as visited

    // Check all four directions
    dfs(r - 1, c); // up
    dfs(r + 1, c); // down
    dfs(r, c - 1); // left
    dfs(r, c + 1); // right
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 'L') {
        dfs(i, j);
        count++;
      }
    }
  }

  return count;
};

module.exports = getTotalIsles;
