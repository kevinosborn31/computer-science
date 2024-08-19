function revealMinesweeper(board, row, column) {
    if (board[row][column] === 'M') {
      board[row][column] = 'X';
      return board;
    }
  
    const neighbors = getNeighbors(board, row, column);
    let adjacentMinesCount = 0;
    for (const [neighborRow, neighborColumn] of neighbors) {
      if (board[neighborRow][neighborColumn] === 'M') {
        adjacentMinesCount +=1;
      }
    }
  
    if (adjacentMinesCount > 0) {
      board[row][column] = adjacentMinesCount.toString();
    } else {
      board[row][column] = '0';
      for (const [neighborRow, neighborColumn] of neighbors) {
        if (board[neighborRow][neighborColumn] === 'H') {
          revealMinesweeper(board, neighborRow, neighborColumn);
        }
      }
    }
  
    return board;
  }
  
  function getNeighbors(board, row, column) {
    const directions = [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0],
      [1, 1],
      [1, -1],
      [-1, 1],
      [-1, -1],
    ];
    const neighbors = [];
    for (const [directionRow, directionColumn] of directions) {
      const newRow = row + directionRow;
      const newColumn = column + directionColumn;
      if (0 <= newRow && newRow < board.length && 0 <= newColumn && column < board[0].length) {
        neighbors.push([newRow, newColumn]);
      }
    }
    return neighbors;
  }  