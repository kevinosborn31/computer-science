const numIslands = (grid) => {
  if (!grid || grid.length === 0) return 0;

  const numRows = grid.length; 
  const numCols = grid[0].length; 
  let totalIslands = 0; 

  const exploreIsland = (row, col) => {
    if (
      row < 0 ||
      col < 0 ||
      row >= numRows ||
      col >= numCols ||
      grid[row][col] === "0"
    ) {
      return;
    }

    grid[row][col] = "0";

    exploreIsland(row - 1, col); 
    exploreIsland(row + 1, col);
    exploreIsland(row, col - 1); 
    exploreIsland(row, col + 1); 
  };

  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      if (grid[row][col] === "1") {
        totalIslands++;
        exploreIsland(row, col); 
      }
    }
  }

  return totalIslands;
};
