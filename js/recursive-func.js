const reverseRecurOne = (inArr) => {
  if (inArr.length === 0) return [];
  if (inArr.length === 1) return inArr[0];
  const _swapingItems = inArr.splice(0, 2);
  const _restOfItems = inArr;
  const _temp = _swapingItems[0];
  _swapingItems[0] = _swapingItems[1];
  _swapingItems[1] = _temp;
  return reverseRecur(_restOfItems).concat(_swapingItems);
};

const reverseRecurTwo = (inArr) => {
  if (inArr.length === 0) return [];
  if (inArr.length === 1) return inArr;
  const tempArr = [];
  tempArr.push(inArr[1]);
  tempArr.push(inArr[0]);
  return reverseRecur(inArr.slice(2, inArr.length)).concat(tempArr); 
}

const reverseRecurThree = (arr) => {
  if (arr.length < 2) return arr;
  const shiftEle = arr.splice(arr.length - 1, 1);
  return [...shiftEle, ...reverseRecurThree(arr)];
}

// const findFibValue = (n) => {
//   if (n === 0) return 0;
//   if (n === 1) return 1;
//   if (n === 2) return 1;
//   return findFibValue(n-2) + findFibValue(n-1);
// }

const findFibValue = (n) => {
  if (n < 1) return 0;
  if (n < 3) return 1;
  return findFibValue(n-2) + findFibValue(n-1);
}

// const fib = (n) => {
//   if (n < 3) return 1;
//   let prev = 1;
//   let curr = 1;

//   for (let i = 2; i < n; i++) {
//     const next = prev + curr;
//     prev = curr;
//     curr = next;
//   }
//   return curr;
// }

const fibArr = (n) => {
  if (n === 0) return [0];
  if (n === 1) return [0, 1];
  if (n === 2) return [0, 1, 1];
  const finallyGotArr = fibArr(n-1);
  const nextElement = finallyGotArr[n-1] + finallyGotArr[n-2];
  return [...finallyGotArr, nextElement]; 
}

// const normalQuickSort = (inArr) => {
//   let ansArr = [...inArr];
//   let leftArr = [];
//   let rightArr = [];

//   let currIndex = 0;
  
//   while (currIndex < inArr.length) {
//     let pivotEle = inArr[currIndex];
//     for (let i = 0; i < ansArr.length; i++) {
//       if (ansArr[i] < pivotEle) leftArr.push(ansArr[i]);
//       if (ansArr[i] >= pivotEle) rightArr.push(ansArr[i]);
//     }
//     ansArr = [...leftArr, ...rightArr];
//     currIndex++;
//     leftArr = [];
//     rightArr = [];
//   }

//   return ansArr;
// }

const recurQuickSort = (inArr) => {
  if (inArr.length < 2) return inArr;
  const pivotElement = inArr.shift();
  const leftArr = [];
  const rightArr = [];
  for (let i = 0; i < inArr.length; i++) {
    if (inArr[i] < pivotElement) leftArr.push(inArr[i]); 
    if (inArr[i] >= pivotElement) rightArr.push(inArr[i]); 
  }
  const finalArr = [...recurQuickSort(leftArr), pivotElement,...recurQuickSort(rightArr)];
  return finalArr;
}

const mergeSort = (inArr) => {
  if (inArr.length < 2) return inArr;
  const middlePoint = Math.floor(inArr.length / 2);
  let leftArr = [];
  let rightArr = [];
  for (let i = 0; i < middlePoint; i++) {
    leftArr.push(inArr[i]);
  }
  for (let j = middlePoint; j < inArr.length; j++) {
    rightArr.push(inArr[j]);
  }

  const setA = mergeSort(leftArr);
  const setB = mergeSort(rightArr);

  return mergeSortedArrays(setA, setB);
}

const mergeSortedArrays = (arrA, arrB) => {
  let i = 0;
  let j = 0;
  let returnArr = [];

  while (i < arrA.length && j < arrB.length) {
    if (arrA[i] < arrB[j]) {
      returnArr.push(arrA[i]);
      i++;
    } else {
      returnArr.push(arrB[j]);
      j++;
    }
  }
  while (i < arrA.length) {
    returnArr.push(arrA[i++]);
  }
  while (j < arrB.length) {
    returnArr.push(arrB[j++]);
  }
  return returnArr;
}

const QSort = (inArr) => {
  if (inArr.length < 2) return inArr;
  const pivotIndex = Math.floor(inArr.length / 2);
  const leftArr = [];
  const rightArr = [];
  for (let i = 0; i < inArr.length; i++) {
    if (i === pivotIndex) continue;
    if (inArr[i] < inArr[pivotIndex]) {
      leftArr.push(inArr[i]);
    } else {
      rightArr.push(inArr[i]);
    }
  }
  return [...QSort(leftArr), inArr[pivotIndex], ...QSort(rightArr)];
}

const factorial = (n) => {
  if (n <= 1) return 1;
  return n * factorial(n-1);
}

const factorialArr = (n) => {
  if (n === 0) return [1];
  if (n === 1) return [1, 1];
  const previousFacts = factorialArr(n-1);
  const nextFact = n * previousFacts[n-1];
  return [...previousFacts, nextFact];
}

exports.reverseRecurOne = reverseRecurOne;
exports.reverseRecurTwo = reverseRecurTwo;
exports.reverseRecurThree = reverseRecurThree;
exports.findFibValue = findFibValue;
exports.fibArr = fibArr;
// exports.normalQuickSort = normalQuickSort;
exports.recurQuickSort = recurQuickSort;
exports.mergeSort = mergeSort;
// exports.fib = fib;
exports.QSort = QSort;
exports.factorial = factorial;
exports.factorialArr = factorialArr;