/// #57 Insert Interval

/*
import: set of non-overlapping intervals

intervals = [[1,5],[6,9]], newInterval = [2,5]
output: [[1,5],[6,9]]

Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
Output: [[1,2],[3,10],[12,16]]

constraints: sorted by start time

PSEUDOCODE:
create array to store result
Loop through Input

if RangeNew is completely before Range[i], insert RangeNew before Range[i]

if R[i]Start < RNewStart => RNewStart = R[i]Start 
if R[i]End > RNewEnd => RNewEnd = R[i]Start

check next R[i+1]


*/

// intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]]
// newInterval = [4,8]

// intervals = [[3, 5], [8, 10], [12,14], [15,16]]
// newInterval = [8, 14]

intervals = []
newInterval = [1,5]

//Solution #1
// function InsertInterval(intervals, newInterval) {

//   let result = [];

//   // empty 
//   if (!intervals.length){
//     return [newInterval]
//   }

//   for (let i = 0; i < intervals.length; i++) {
//     // newInt is before
//     if (newInterval[1] < intervals[i][0]) {
//       result.push(newInterval)
//       let remainders = intervals.slice(i)
//       result = [...result, ...remainders]
//       return result
//       // new int is after
//     } else if (newInterval[0] > intervals[i][1]) {
//       console.log('here 2', i)
//       result.push(intervals[i])
//       // if final iteration
//       if (i === intervals.length - 1){
//         result.push(newInterval);
//       }
//     } else {
//       console.log('here-3', i, intervals[i], newInterval)
//       if (intervals[i][0] < newInterval[0]) {
//         newInterval[0] = intervals[i][0];
//       }
//       if (intervals[i][1] > newInterval[1]) {
//         newInterval[1] = intervals[i][1];
//       }
//       if (i === intervals.length - 1){
//         result.push(newInterval)
//       }
//       console.log(i, newInterval)
//     }
//   }
//   return result

// }

console.log(InsertInterval(intervals, newInterval));