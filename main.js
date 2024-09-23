
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
  let current = 1;
  if (current > n) {
    return;
  } else {
    console.log(current);
    current++;
    printNumbers(n);
  }
}


// console.log(sumArray([1, 2, 3, 4, 5]));
// console.log(avgArray([1, 2, 3, 4, 5]));
// console.log(longestString(['harley quinn', 'superman', 'lex luthor', 'the flash', 'batman', 'green lantern']));
// console.log(stringsLongerThan(['coffee', 'pepsi', 'tea', 'chai latte', 'slurpee'], 5));
// printNumbers(10);

// Part 2

/*
When functions are built into objects, like Arrays, they are referred to as “methods” of those objects. Many methods, including Array methods, require “callback functions” to determine their behavior.
For the tasks below, use the following data to test your work:
[{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
 { id: "48", name: "Barry", occupation: "Runner", age: "25" },
 { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
 { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
 { id: "7", name: "Bilbo", occupation: "None", age: "111" }]
Use callback functions alongside Array methods to accomplish the following:
Sort the array by age.
Filter the array to remove entries with an age greater than 50.
Map the array to change the “occupation” key to “job” and increment every age by 1.
Use the reduce method to calculate the sum of the ages.
Then use the result to calculate the average age.
*/

const data = [
  { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
  { id: "48", name: "Barry", occupation: "Runner", age: "25" },
  { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
  { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
  { id: "7", name: "Bilbo", occupation: "None", age: "111" }
];


const sortedData = data.sort((a, b) => {
  return parseInt(a.age) - parseInt(b.age);
});

console.log("Sorted Data:", sortedData);

const filteredData = data.filter(object => {
  return parseInt(object.age) <= 50;
});

console.log("Filtered Data:", filteredData);

const occToJob = data.map(object => {
  // Need to change occupation key to job and increment age by 1, but keep age as a string somehow.
  object["job"] = object["occupation"];
  object["age"] = (parseInt(object["age"]) + 1).toString();
  return object;
});

console.log("Occ to job:", occToJob);

const AverageOfAges = data.reduce((accumulator, currentValue) => {
  return accumulator + parseInt(currentValue.age)
}, 0) / data.length;

console.log("Average Age:", AverageOfAges);