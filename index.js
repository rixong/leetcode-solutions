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

// intervals = [[4,6],[8,10],[12,15], [17,19]]
// newInterval = [7,20]

intervals = [[3, 5], [8, 10], [12,14], [15,16]]
newInterval = [1, 17]

// intervals = []
// newInterval = [1,5]


//Solution #2 88 ms, 40 MB


function InsertInterval(intervals, newInterval) {

  if (!intervals.length){
    return [newInterval]
  }

  if(newInterval[1] < intervals[0][0]){
    intervals.unshift(newInterval)
    return intervals
  }
  
  if(newInterval[0] > intervals[intervals.length-1][1]){
    intervals.push(newInterval)
    return intervals
  }

  idxBeg = -1;
  idxEnd = -1;
  beg = 0;
  end = 0;

//FIND BEGINNING OF NEW RANGE

  for (let i=0; i<intervals.length; i++) {
    if(intervals[i][0] <= newInterval[0] && intervals[i][1] >= newInterval[0] ){
      idxBeg = i;
      beg = intervals[i][0]
      break
    }
    if(intervals[i][0] > newInterval[0]){
      idxBeg = i
      beg = newInterval[0];
      break
    }
  }
  
  //FIND ENDING OF NEW RANGE

  for (let i=intervals.length-1; i>=0; i--) {
    if(intervals[i][0] <= newInterval[1] && intervals[i][1] >= newInterval[1] ){
      idxEnd = i;
      end = intervals[i][1]
      break
    }
    if(intervals[i][0] < newInterval[1]){
      idxEnd = i
      end = newInterval[1];
      break
    }
  }
  // console.log('bexidx', idxBeg, 'begNum', beg);
  // console.log('endidx', idxEnd, 'endNum', end);

  const numToDelete = idxEnd - idxBeg + 1;
  intervals.splice(idxBeg, numToDelete, [beg, end])
  return intervals;

}
console.log(InsertInterval(intervals, newInterval));

//Solution #1 300 ms, 50 mb

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

