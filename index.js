/// #53 Max Subarray

/*
PSEUDO CODE
Output: num
Input: Array of nums, no empty array
Constraints: If no neg numbers, result would be whole set. If all negative nums, number closest to 0.

loop
	
if the current total is < 0 AND the current total is < current number
Then reset the current total to the current number.
Otherwise Add the current number to the cur total.

IF current total is > max, make max the current total.
// const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]

*/

// O(n)
const nums = [-1, -3, -2]
function maxSubarray(nums) {
  let max = nums[0];
  let curTotal = nums[0];
  console.log(nums)
  
  for (let i = 1; i < nums.length; i++) {
    if ((curTotal < 0) && (curTotal < nums[i])) {
      curTotal = nums[i]
    } else {
      curTotal += nums[i];
    }
    if (curTotal > max) {
      max = curTotal
    }
    console.log( nums[i], curTotal, max)
  }
  return max
}

console.log(maxSubarray(nums))



