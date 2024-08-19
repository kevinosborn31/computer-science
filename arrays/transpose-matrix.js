function transposeMatrix(matrix) {
    let transposedMatrix = [];
    let rowPointer = 0;
    let columnPointer = 0;
  
    while (columnPointer < matrix.length) {
      let newRow = [];
      while (rowPointer < matrix[columnPointer].length) {
        newRow.push(matrix[columnPointer][rowPointer]);
        rowPointer++;
      }
      transposedMatrix.push(newRow);
      columnPointer++;
    }
    return transposedMatrix;
  }