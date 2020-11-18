/* 73. Set Matrix Zeroes
Given an m x n matrix. If an element is 0, set its entire row and column to 0. Do it in-place.
 */

// function setZeros(matrix) {
//   const rows = new Set([]);
//   const columns = new Set([]);

//   for (let i = 0; i < matrix.length; i += 1) {
//     for (let j = 0; j < matrix[0].length; j += 1) {
//       if (matrix[i][j] === 0) {
//         rows.add(i);
//         columns.add(j);
//       }
//     }
//   }

//   rows.forEach((row) => {
//     for (let i = 0; i < matrix[0].length; i += 1) {
//       matrix[row][i] = 0;
//     }
//   });

//   columns.forEach((col) => {
//     for (let i = 0; i < matrix.length; i += 1) {
//       matrix[i][col] = 0;
//     }
//   })
//   return matrix;
// }

function setZeros(matrix) {

  const firstSquareIsZero = matrix[0][0] === 0;

  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix[0].length; j += 1) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }

  for (let i = 1; i < matrix.length; i += 1) {
    for (let j = 1; j < matrix[0].length; j += 1) {
      console.log(i,j,matrix[i][0], matrix[0][j])
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
    }
  }

  if (matrix[0][0] === 0) {
    for (let i = 0; i < matrix[0].length; i++) {
      matrix[0][i] = 0;
    }
  }

  if (firstSquareIsZero) {
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][0] = 0;
    }
  }
  return matrix;
}
console.log(setZeros(
  // [[1], [0], [3]]
  [[2, 0, 2, 3], [0, 3, 3, 2], [1, 3, 1, 1]],
  // [[1, 1, 1], [1, 0, 1], [1, 1, 1]],
));

