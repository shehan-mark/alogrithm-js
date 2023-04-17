const {
  reverseRecurOne,
  reverseRecurThree,
  findFibValue,
  fibArr,
  normalQuickSort,
  recurQuickSort,
  mergeSort,
  QSort,
  factorial,
  factorialArr
} = require('./recursive-func');


const main = () => {
  // const reversed = reverseRecurOne([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  // console.log(reversed);

  // console.log(findFibValue(6));
  // const fibFullArray = fibArr(5);
  // console.log(fibFullArray);

  // console.log(normalQuickSort([0, 9, 3, 8, 2, 7, 5]));
  // console.log(recurQuickSort([6, 9, 3, 8, 2, 7, 5]));
  // console.log(mergeSort([4, 3, 5, 7, 6, 2, 8]));
  // console.log(QSort([7,3,5,1,4]));

  // console.log(reverseRecurThree([2,4,6,8,10]));

  console.log(factorial(5));
  console.log(factorialArr(5));
}

main();