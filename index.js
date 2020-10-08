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

*/

var generateMatrix = function (n) {

  let result = [];
  for (let i = 0; i < n; i++) {
    result.push([])
  }

  let t = 0;
  let r = n;
  let l = 0;
  let b = n - 1;

  let count = 1;
  while (count <= n * n) {
    
    for (let i = l; i < r; i++) {
      result[t][i] = count
      count++
    }
    t = t + 1;
    if(t>b){
      return result;
    }

    for (let i = t; i < b; i++) {
      result[i][r - 1] = count
      count++
    }
    r = r - 1;
    for (let i = r; i >= l; i--) {
      result[r][i] = count;
      count++;
    }
    b = b - 1;
    for (let i = b; i >= t; i--) {
      result[i][l] = count;
      count++
    }

    l = l+1
    
    console.log('r:', r, 'b:', b, 'l:', l, 't:', t)
    console.log(result)
  }
};

generateMatrix(2)