const riverSizes = (matrix) => {
  const sizes = [];
  const visited = matrix.map((row) => row.map(() => false));

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (visited[i][j]) continue;
      traverseNode(i, j, matrix, visited, sizes);
    }
  }

  return sizes;
};

const traverseNode = (i, j, matrix, visited, sizes) => {
  let currentRiverSize = 0;
  const nodesToExplore = [[i, j]];

  while (nodesToExplore.length) {
    const [currentI, currentJ] = nodesToExplore.pop();

    if (visited[currentI][currentJ]) continue;
    visited[currentI][currentJ] = true;

    // Skip nodes that are not part of the river
    if (matrix[currentI][currentJ] === 0) continue;

    currentRiverSize++;
    const unvisitedNeighbors = getUnvisitedNeighbors(
      currentI,
      currentJ,
      matrix,
      visited
    );

    for (const neighbor of unvisitedNeighbors) {
      nodesToExplore.push(neighbor);
    }
  }

  if (currentRiverSize > 0) sizes.push(currentRiverSize);
};

const getUnvisitedNeighbors = (i, j, matrix, visited) => {
  const unvisitedNeighbors = [];

  if (i > 0 && !visited[i - 1][j]) unvisitedNeighbors.push([i - 1, j]);
  if (i < matrix.length - 1 && !visited[i + 1][j])
    unvisitedNeighbors.push([i + 1, j]);
  if (j > 0 && !visited[i][j - 1]) unvisitedNeighbors.push([i, j - 1]);
  if (j < matrix[0].length - 1 && !visited[i][j + 1])
    unvisitedNeighbors.push([i, j + 1]);

  return unvisitedNeighbors;
};
