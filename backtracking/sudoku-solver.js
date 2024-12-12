const solveSudoku = (board) => {
    const digits = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  
    const isValidPlacement = (row, col, digit) => {
      // Check if the digit is already in the row or column
      for (let i = 0; i < 9; i++) {
        if (board[row][i] === digit || board[i][col] === digit) {
          return false;
        }
      }
  
      // Check if the digit is already in the 3x3 subgrid
      const subgridRowStart = Math.floor(row / 3) * 3;
      const subgridColStart = Math.floor(col / 3) * 3;
  
      for (let r = 0; r < 3; r++) {
        for (let c = 0; c < 3; c++) {
          if (board[subgridRowStart + r][subgridColStart + c] === digit) {
            return false;
          }
        }
      }
      return true;
    };
  
    const solve = (cellIndex) => {
      if (cellIndex === 81) {
        return true;
      }
  
      const row = Math.floor(cellIndex / 9);
      const col = cellIndex % 9;
  
      // If the cell is already filled, move to the next one
      if (board[row][col] !== ".") {
        return solve(cellIndex + 1);
      }
  
      // Try placing each digit in the cell
      for (const digit of digits) {
        if (isValidPlacement(row, col, digit)) {
          board[row][col] = digit;
  
          if (solve(cellIndex + 1)) {
            return true;
          }
  
          // Backtrack: Reset the cell
          board[row][col] = ".";
        }
      }
  
      return false; // Trigger backtracking
    };
  
    solve(0);
  };
  