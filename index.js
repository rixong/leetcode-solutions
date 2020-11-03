/* 73. Set Matrix Zeroes
Given an m x n matrix. If an element is 0, set its entire row and column to 0. Do it in-place.
 */

function setZeros(matrix) {
  const rows = new Set([]);
  const columns = new Set([]);

  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix[0].length; j += 1) {
      if (matrix[i][j] === 0) {
        rows.add(i);
        columns.add(j);
      }
    }
  }

  rows.forEach((row) => {
    for (let i = 0; i < matrix[0].length; i += 1) {
      matrix[row][i] = 0;
    }
  });

  columns.forEach((col) => {
    for (let i = 0; i < matrix.length; i += 1) {
      matrix[i][col] = 0;
    }
  })
  return matrix;
}

console.log(setZeros(
  // [[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]],
  [[1, 1, 1], [1, 0, 1], [1, 1, 1]],
));
