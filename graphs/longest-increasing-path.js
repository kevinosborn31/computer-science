const longestIncreasingPath = (matrix) => {
  if (!matrix || matrix.length === 0) return 0;

  const rows = matrix.length;
  const cols = matrix[0].length;

  const memo = Array.from({ length: rows }, () => Array(cols).fill(0));

  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  let longestPath = 0;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      longestPath = Math.max(
        longestPath,
        dfs(row, col, matrix, memo, directions)
      );
    }
  }

  return longestPath;
};

const dfs = (row, col, matrix, memo, directions) => {
  if (memo[row][col] !== 0) return memo[row][col];

  let maxLength = 1;

  for (const [dRow, dCol] of directions) {
    const newRow = row + dRow;
    const newCol = col + dCol;

    if (
      newRow >= 0 &&
      newRow < matrix.length &&
      newCol >= 0 &&
      newCol < matrix[0].length &&
      matrix[newRow][newCol] > matrix[row][col]
    ) {
      const pathLength = 1 + dfs(newRow, newCol, matrix, memo, directions);
      maxLength = Math.max(maxLength, pathLength);
    }
  }

  memo[row][col] = maxLength;
  return maxLength;
};
