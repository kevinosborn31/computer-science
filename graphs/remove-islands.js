const removeIslands = (matrix) => {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const onesConnectedToBorder = Array.from({ length: rows }, () =>
    Array(cols).fill(false)
  );

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const isBorder =
        row === 0 || row === rows - 1 || col === 0 || col === cols - 1;
      if (isBorder && matrix[row][col] === 1) {
        findOnesConnectedToBorder(matrix, row, col, onesConnectedToBorder);
      }
    }
  }

  for (let row = 1; row < rows - 1; row++) {
    for (let col = 1; col < cols - 1; col++) {
      if (!onesConnectedToBorder[row][col]) {
        matrix[row][col] = 0;
      }
    }
  }

  return matrix;
};

const findOnesConnectedToBorder = (
  matrix,
  startRow,
  startCol,
  onesConnectedToBorder
) => {
  const stack = [[startRow, startCol]];

  while (stack.length > 0) {
    const [currentRow, currentCol] = stack.pop();

    if (onesConnectedToBorder[currentRow][currentCol]) continue;

    onesConnectedToBorder[currentRow][currentCol] = true;

    const neighbors = getNeighbors(matrix, currentRow, currentCol);

    for (const [neighborRow, neighborCol] of neighbors) {
      if (
        matrix[neighborRow][neighborCol] === 1 &&
        !onesConnectedToBorder[neighborRow][neighborCol]
      ) {
        stack.push([neighborRow, neighborCol]);
      }
    }
  }
};

const getNeighbors = (matrix, row, col) => {
  const neighbors = [];
  if (row > 0) neighbors.push([row - 1, col]);
  if (row < matrix.length - 1) neighbors.push([row + 1, col]);
  if (col > 0) neighbors.push([row, col - 1]);
  if (col < matrix[0].length - 1) neighbors.push([row, col + 1]);
  return neighbors;
};
