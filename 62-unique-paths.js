// function numPaths(m, n) {
//   const result = [[]];
//   // Adding the first row of '1's to the array
//   for (let i = 0; i < n; i += 1) {
//     result[0].push(1);
//   }
//   // iterating over each of the rows
//   for (let i = 1; i < m; i += 1) { 
//     result.push([1]);    // adding 1 to the first, left most square

//       // Getting the total for the current square
//     for (let j = 1; j < n; j += 1) {
//       result[i][j] = result[i][j - 1] + result[i - 1][j];
//     }
//   }
// // Return the bottom right hand value that has the total.
//   return result[m - 1][n - 1];
// }

function numPaths2(obstacleGrid) {
  const result = [[]];
  for (let i = 0; i < obstacleGrid[0].length; i += 1) {
    if (obstacleGrid[0][i] === 1 || result[0][i - 1] === 0) {
      result[0].push(0);
    } else {
      result[0].push(1);
    }
  }

  for (let i = 1; i < obstacleGrid.length; i += 1) {
    if (obstacleGrid[i][0] === 1 || result[i - 1][0] === 0) {
      result.push([0]);
    } else {
      result.push([1]);
    }

    for (let j = 1; j < obstacleGrid[i].length; j += 1) {
      if (obstacleGrid[i][j] === 1) {
        result[i].push(0);
      } else {
        result[i].push(result[i][j - 1] + result[i - 1][j]);
      }
    }
  }
  return result[obstacleGrid.length - 1][obstacleGrid[0].length - 1];
}

console.log(numPaths2(
  [
    [0, 0, 1, 0],
    [0, 0, 0, 0],
    [1, 0, 0, 0]
  ]
));
