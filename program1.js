function numIslands(grid) {
  if (grid.length === 0) return 0;
  
  const rows = grid.length;
  const cols = grid[0].length;
  let islandCount = 0;

  function dfs(row, col) {
      // If out of bounds or water cell, return immediately
      if (row < 0 || col < 0 || row >= rows || col >= cols || grid[row][col] === 'W') {
          return;
      }

      // Mark the current cell as visited
      grid[row][col] = 'W';  // Change 'L' to 'W' to mark it visited

      // Explore all 4 directions: up, down, left, right
      dfs(row - 1, col);
      dfs(row + 1, col);
      dfs(row, col - 1);
      dfs(row, col + 1);
  }

  // Traverse the grid
  for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
          if (grid[i][j] === 'L') {
              // Found a new island
              islandCount++;
              // Perform DFS to mark all connected land cells
              dfs(i, j);
          }
      }
  }

  return islandCount;
}
