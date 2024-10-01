
const sumArray = (arr) => {
  let total = 0;
  for (let num of arr) {
    total += num;
  }
  return total;
}

console.log("sumArray: ",sumArray([1, 2, 3, 4, 5]));

const avgArray = (arr) => {
  // We effectively just need to add up the array and divide by the length of the array.
  return sumArray(arr) / arr.length;
}

console.log("avgArray: ",avgArray([1, 2, 3, 4, 5]));

const longestString = (arr) => {
  let longest = '';
  for (let str of arr) {
    if (str.length > longest.length) {
      longest = str;
    }
  }
  return longest;
}

console.log("longestString: ",longestString(['harley quinn', 'superman', 'lex luthor', 'the flash', 'batman', 'green lantern']));


const stringsLongerThan = (arr, n) => {
  let longerStrings = [];
  for (let str of arr) {
    if (str.length > n) {
      longerStrings.push(str);
    }
  }
  return longerStrings;
}

console.log("stringsLongerThan: ",stringsLongerThan(['coffee', 'pepsi', 'tea', 'chai latte', 'slurpee'], 5));

const printNumbers = (n) => {
  // Need to print numbers from 1 to n inclusive, recursively
  // The issue is this logs the numbers backwards, from n to 1. It says print every number between 1 and n, so technically this is right but still should look at it.
  if (n > 0) {
    console.log(n);
    printNumbers(n - 1);
  }
}

printNumbers(10);


// Part 2


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
  delete object["occupation"];
  object["age"] = (parseInt(object["age"]) + 1).toString();
  return object;
});

console.log("Occ to job:", occToJob);

const AverageOfAges = data.reduce((accumulator, currentValue) => {
  return accumulator + parseInt(currentValue.age)
}, 0) / data.length;

console.log("Average Age:", AverageOfAges);

// Part 3
const batmanObj = { id: "42", name: "Bruce", occupation: "Knight", age: "41" };
const damienObj = { id: "15", name: "Damien", occupation: "Son of Knight" };

const incrementAge = (obj) => {
  if (typeof obj['age'] === 'string') {
  obj['age'] = (parseInt(obj['age']) + 1).toString();
  } else if (!('age' in obj)) {
    obj['age'] = "0";
  } else {
    obj['age']++;
  }
  obj['updated_at'] = new Date().toISOString();
  return obj;
}

console.log("Dummy Object incrementAge:", incrementAge(batmanObj));

const incrementCopysAge = (obj) => {
  const copyObject = {...obj };

  if (copyObject['age'] === undefined) {
    copyObject['age'] = "0";
  } else if (typeof copyObject['age'] ==='string') {
    copyObject['age'] = (parseInt(copyObject['age']) + 1).toString();
  } else {
    copyObject['age']++;
  }
  copyObject['updated_at'] = new Date().toISOString();
  return copyObject;
}

console.log("Dummy Object incrementCopysAge:", incrementCopysAge(damienObj));
console.log("Batman object after incrementCopysAge:", incrementCopysAge(batmanObj));