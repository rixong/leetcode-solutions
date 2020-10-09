// function addToFive(n) {
//   if (n > 1) {
//     console.log(n)
//     addToFive(n-1) + n
//   } else {
//     return 1
//   }
// }

// console.log(addToFive(5))

function printLetters(str) {
  console.log(str[0])
  if(str.length>1){
    printLetters(str.substring(1))
  } else {
    return true
  }
}

// printLetters('pizza');

function reverseString(myString) {
  if (myString.length < 2) {
    console.log(myString);
    return myString;
  } else {
    console.log(myString);
    return reverseString(myString.substring(1)) + myString[0];
  }
}

// console.log(reverseString('help'))

/*

ms=help rs(help) ret ple + h
ms=elp rs(elp) ret pl + e
ms=lp rs(lp) ret p + l 
ms=p  rs(p)  ret p

*/

function checkPalindrome(str) {
  let l = str.length

  if(l < 2){
    return true
  } else {
    if (str[0] === str[l-1]){
      return checkPalindrome(str.substring(1,l-1))
    } else{
      return false
    }
  }
}

function checkPalindrome2 (str){
  let l=str.length;
  for(let i = 0; i < Math.floor(l/2); i++) {
    if (str[i] !== str[l-i-1]){
      return false
    }
  }
  return true
}

// console.log(checkPalindrome2('pizip'));  

function addUpTo(arr, idx) { 
  if(idx === 0){
    return arr[idx]
  } else {
    return arr[idx] + addUpTo(arr, idx-1);
  }
}

// function addUpTo(myArray, index) {
//   return index ? myArray[index] + addUpTo(myArray, --index) : myArray[index];
// }


// console.log(addUpTo([1,2,3,4,5,6], 1))

// function largestInteger(arr, max=0) {
//   if(arr.length === 1){
//     return arr[0] > max ? arr[0] : max
//   } else {
//     arr[0] > max ? arr[0] : max
//     return largestInteger(arr.slice(1), arr[0] > max ? arr[0] : max)
//   }
  
// }
// console.log(largestInteger([15,2,7,3,4,5,6]))
