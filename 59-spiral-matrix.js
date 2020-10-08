//#59 - Spiral Matrix

/*
Given a positive integer n, generate a square matrix filled with elements from 1 to n2 in spiral order.
Input: 3
Output:
[
  [ 1, 2, 3 ],
  [ 8, 9, 4 ],
  [ 7, 6, 5 ]
]

Remember that for statements complete final counter before ending (i++)

*/

var generateMatrix = function (n) {

  let result = [];
  for (let i = 0; i < n; i++) {
    result.push([])
  }

  let count = 1;
  let startColumn = 0;
  let endColumn = n-1;
  let startRow = 0;
  let endRow = n-1;

  while (startColumn <= endColumn && startRow <= endRow) {
    
    for (let i = startColumn; i <= endColumn; i++) {
      result[startRow][i] = count
      count++
    }
    startRow++;
    
    for (let i = startRow; j <= endRow; j++) {
      result[j][endColumn] = count
      count++
    }
    endColumn--;
    
    for (let i = endColumn; i >= startColumn; i--) {
      result[endRow][i] = count;
      count++;
    }
    endRow--
    
    for (let i = endRow; i >= startRow; i--) {
      result[i][startColumn] = count;
      count++
    }
    startColumn++;
  }
  return result;
}

console.log(generateMatrix(3));