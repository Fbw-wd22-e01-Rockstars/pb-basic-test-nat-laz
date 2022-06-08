// Add answers here

// #### 1. Los or New?
// Create a function named "_nameOfCity_". If a passed string begins with "_Los_" or "_New_", then return the full string. If not, return "_The city name does not begin with Los or New_". The function should be **case insensitive**.

// ##### Examples
// ````javascript
// nameOfCity('New York') ➞ 'New York'
// nameOfCity('newark') ➞ 'newark'
// nameOfCity('London') ➞ 'The city name does not begin with Los or New'

const nameOfCity = (str) => {
  let begins = str.slice(0, 3);
  if (
    begins.toLowerCase() === "Los".toLowerCase() ||
    begins.toLowerCase() === "New".toLowerCase()
  ) {
    return str;
  } else {
    return "The city name does not begin with Los or New";
  }
};
//console.log(nameOfCity("New York")); // 'New York"
//console.log(nameOfCity("newark")); // 'newark'
//console.log(nameOfCity("los Angeles")); // 'los Angeles'
console.log(nameOfCity("London")); // 'The city name does not begin with Los or New'

//   #### 2. isDivisible?
// Create a function named "_isDivisible_". The function should take an integer as an argument. If the integer is divisible by 100, then return true. If not, return false.

// ##### Examples
// ````javascript
// isDivisible(1) ➞ false
// isDivisible(1000) ➞ true
// isDivisible(100) ➞ true
// ````

const isDivisible = (num) => (num % 100 === 0 ? true : false);

console.log(isDivisible(1)); //false
//console.log(isDivisible(1000)); //true
//console.log(isDivisible(100)); // true

// #### 4. What's the weather?
// Use a **ternary operator** to complete this task. Create a function named "_isRaining_". If passed `true`, return "_wet day - you need an umbrella_". If passed `false`, return "_dry day - leave your umbrella at home_".

// ##### Example
// ````javascript
// isRaining(true) ➞ 'wet day - you need an umbrella'
// ````
const isRaining = (bolean) =>
  bolean === true
    ? `wet day - you need an umbrela`
    : `dry day - leave your umbrella at home`;

console.log(isRaining(true));
//console.log(isRaining(false));

// ### Loops

// #### 1. Sequence
// Create a function named "_geometricalSequence_" and **use a loop** to return the following sequence: _`1 2 4 8 16 32 64 128 256`_. Concatenate each value to a string and return a string.

// ##### Example
// ````javascript
// geometricalSequence() ➞ '1 2 4 8 16 32 64 128 256'
// ````

const geometricalSequence = () => {
  let result = [];
  let lastNum = 256;
  for (let i = 1; i <= lastNum; i *= 2) {
    result.push(i);
  }
  return result.join(" ");
};
console.log(geometricalSequence());

// #### 2. Multiples
// Create a function named "_multiplesOfThree_" and **use a loop** to return the first five multiples of three: _`3 6 9 12 15`_. Concatenate each value to a string and return a string.

// ##### Example
// ````javascript
// multiplesOfThree() ➞ '3 6 9 12 15'
// ````

const multiplesOfThree = () => {
  let result = [];
  for (let i = 3; i <= 15; i += 3) {
    result.push(i);
  }
  return result.join(" ");
};

console.log(multiplesOfThree());

//   ### Math

// #### 1. You've got the power
// Create a function named "_powerOf_" which takes an integer as an argument and returns the integer to the power of itself. You should **use a Math object method** to make the calculation.

// ##### Examples
// ````javascript
// powerOf(3) ➞ 27
// powerOf(4) ➞ 256
// ````

const powerOf = (num) => Math.pow(num, num);

console.log(powerOf(3)); //27
console.log(powerOf(4)); // 256

// ### Problem Solving

// #### 1. How many?
// Create a function named "_vowelCount_" that accepts a string as an argument. Check how many vowels (A, a, E, e, I, i, O, o, U, u) the string contains, if any. **Return the vowel count** of the string.

// ##### Examples
// ````javascript
// vowelCount("hello") ➞ 2
// vowelCount("test") ➞ 1
// vowelCount("fbw") ➞ 0
// ````

const vowelCount = (str) => {
  let vowels = "AaEeIiOoUu";
  let vowelsFromStr = "";
  for (let i of str) {
    for (let deep of vowels) {
      if (deep === i) {
        vowelsFromStr += deep;
      }
    }
  }
  return vowelsFromStr.length;
};

console.log(vowelCount("hEllo")); //2
console.log(vowelCount("test")); //1
console.log(vowelCount("fbw")); //0

// DO NOT EDIT below this line - This will result in an automatic fail
// module.exports = {nameOfCity, isDivisible, missingAngle, isRaining, geometricalSequence, multiplesOfThree, powerOf, vowelCount};
