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

if Range[i] is completely before or after (start AND end is before OR start AND end is after) newRange, push to result

if R[i]Start < RNewStart => RNewStart = R[i]Start 
if R[i]End > RNewEnd => RNewEnd = R[i]Start

check next R[i+1]






*/


