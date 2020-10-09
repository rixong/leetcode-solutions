// INSERTION SORT 1
// O(n^2)

function insertionSort1(arr) {
  const result = []
  while (arr.length) {
    let min = Math.min(...arr);
    let idx = arr.indexOf(min)
    result.push(arr.splice(idx, 1))
  }
  return result;
}

// SELECTION SORT 1
// O(n^2)

function selectSort1(arr) {
  for (let i = 0; i < arr.length; i++) {
    let idxOfMin = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[idxOfMin]) {
        idxOfMin = j;
      }
    }
    if (idxOfMin !== i) {
      let lesser = arr[idxOfMin];
      arr[idxOfMin] = arr[i];
      arr[i] = lesser;
    }
  }
  return arr
}

// console.log(selectSort1([10, 4, 3, 7, 1, 23]));

// MERGE SORT 1

function mergeSort(arr1, arr2) {

  const result = [];
  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) {
      result.push(arr1.shift());
    } else {
      result.push(arr2.shift());
    }
  }
  return result.concat(arr2).concat(arr1);
}

function merge(arr1, arr2) {


}

console.log(mergeSort([3, 5, 6, 9], [1, 2, 4, 11]))

//result [1,3,4,5,6,9,10]


