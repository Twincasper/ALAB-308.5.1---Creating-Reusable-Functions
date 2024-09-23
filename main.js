/*

With that in mind, write functions that accomplish the following:
Take an array of numbers and return the sum.
Take an array of numbers and return the average.
Take an array of strings and return the longest string.
Take an array of strings, and a number and return an array of the strings that are longer than the given number. 
For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].
Take a number, n, and print every number between 1 and n without using loops. Use recursion.

*/

const sumArray = (arr) => {
  let total = 0;
  for (let num of arr) {
    total += num;
  }
  return total;
}

const avgArray = (arr) => {
  // We effectively just need to add up the array and divide by the length of the array.
  return sumArray(arr) / arr.length;
}

const longestString = (arr) => {
  let longest = '';
  for (let str of arr) {
    if (str.length > longest.length) {
      longest = str;
    }
  }
  return longest;
}

const stringsLongerThan = (arr, n) => {
  let longerStrings = [];
  for (let str of arr) {
    if (str.length > n) {
      longerStrings.push(str);
    }
  }
  return longerStrings;
}

const printNumbers = (n) => {
  if (n === 1) {
    console.log(1);
    return;
  } else {
    console.log(n);
    printNumbers(n - 1);
  }
}


console.log(sumArray([1, 2, 3, 4, 5]));
console.log(avgArray([1, 2, 3, 4, 5]));
console.log(longestString(['harley quinn', 'superman', 'lex luthor', 'the flash', 'batman', 'green lantern']));
console.log(stringsLongerThan(['coffee', 'pepsi', 'tea', 'chai latte', 'slurpee'], 5));
printNumbers(10);