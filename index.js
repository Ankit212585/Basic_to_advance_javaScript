// Q-1 How to find duplicate elements in a given Array...?

const Arry = [1, 8, 7, 4, 2, 2, 4, 7, 8, 9, 7];
const duplicate = Arry.filter(
  (ele, index, arr) => arr.indexOf(ele) !== index
);
console.log(duplicate);

// Explanations:-  filter method 3 perameters leta hai element, index no. and full array, ab arr mai se ele no. nikal liya or ager wo ele !== index k to dublicate number hume mil jayga

//  ----------------------------------------------------------------------------------

// Q-2 How to find the max and min value in a given Array in javaScript...?

const arr = [5, 87, 52, 47, 36, 54, 84, 20, 64];

const maxvalue = (arr) => {
  return arr.reduce(function (pre, curr) {
    return pre > curr ? pre : curr;
  });
};
console.log(maxvalue(arr));

// explanations:-  reduce function ek call back function leta hai usme wo 2 perameters leta hai, previous value and current value, isme agar previous value current value se badi hai to previous value aaygi vrna current value show hogi, is tra hum apna max no. nikaal shkte hai!

//  ----------------------------------------------------------------------------------
//find min value
const minvalue = (arr) => {
  return arr.reduce(function (pre, curr) {
    return pre < curr ? pre : curr;
  });
};
console.log(minvalue(arr));

// explanations:-  reduce function ek call back function leta hai usme wo 2 perameters leta hai, previous value and current value, isme agar previous value current value se choti hai to previous value aaygi vrna current value show hogi, is tra hum apna max no. nikaal shkte hai!

//  ----------------------------------------------------------------------------------
// Q-3 find odd number and even Number in a Array...?
// OddNumber:-
// EvenNumber:-

const my_arr = [1, 2, 3, 48, 9, 5, 25, 44, 22, 66];
const even = my_arr.filter((ele) => {
  return ele % 2 == 0;
});
console.log(even);

const odd = my_arr.filter((ele) => {
  return ele % 2 == 1;
});
console.log(odd);

// explanation: Remeber humne kha tha ki filter method 3 perameter leta hai, element, index, and full array isme odd or even number nikaalne k lie, filter method n element ka use kia hai ager hmara koi bhi element 2 se divide krne prr remider show nhi krta ya zero aata hai to wo hmara even no. hai vran wo odd number hai

//  ----------------------------------------------------------------------------------
// Q-4 what is the diffrence between == and === ...?

var x = 7;
var y = "7";
console.log(x == y);
console.log(x === y);

// == hamari value ko check krta hai prr === hamri value or data type dono ko check krta hai !

//  ----------------------------------------------------------------------------------
// Q-5 How to find the 2nd largest value and remove first largest value in array...?
const largestvalue = [51, 84, 75, 82, 12, 46, 15, 65, 52, 74, 63];
const largestV = (arr) => {
  firstV = Math.max(...arr);
  index = arr.indexOf(firstV);
  arr.splice(index, 1);
  secondV = Math.max(...arr);
  return secondV;
};
console.log(largestV(largestvalue));

// kisi bhi array me largest value nikalne k lie hme math.max ka formula use krna chaiye, or uss first value ko remove krne k lie splice method ka use krna chaiye

//  ----------------------------------------------------------------------------------
// Q-6 what is difference between filter() and find() method in javaScript...?
const Employee = [
  {
    name: "ankit",
    age: 45,
  },
  {
    name: "rahul",
    age: 10,
  },
  {
    name: "nitin",
    age: 12,
  },
  {
    name: "kumar",
    age: 16,
  },
];
const filtermethod = Employee.filter((item) => {
  return item.age > 30;
});
console.log(filtermethod);

const findmethod = Employee.find((item) => {
  return item.age > 10;
});
console.log(findmethod);

// Explanation: filter method pure kisi array or object ko check krta hai or condition k according value ko find krke use print krta hai!

// Explanation: find method bhi same he work krta hai, find method specially pure function mai se uss ek value ko find krega jo apne use find krne k lie kha hai !

//  ----------------------------------------------------------------------------------
// Q-6 How to find the missing number in a given integer array of 1 to 10...?

const my_number = [1, 2, 4, 5, 6, 8, 9, 10];
const missval = [];
const missingV = (arr) => {
  const minval = Math.min(...arr);
  const maxval = Math.max(...arr);
  for (let i = minval; i < maxval; i++) {
    if (arr.indexOf(i) < 0) {
      missval.push(i);
    }
  }
  return missval;
};
console.log(missingV(my_number));

//  ----------------------------------------------------------------------------------
// Q-7 How to find the sum of all elements in a given array[] in javaScript...?

const num = [4, 5, 2, 7, 41, 52, 3, 54, , 52, 2, 85];
const sum = (item) => {
  return item.reduce((pre, curr) => {
    return pre + curr;
  });
};
console.log(sum(num));

//  ----------------------------------------------------------------------------------
// Q-8 How to find the Factorial(n!) of a given number in javaScript...?
// const inputNum = prompt("enter your value");

// var fact = 1;
// if (inputNum < 0) {
//   console.log(`factorial of ${inputNum} is not possible`);
// } else {
//   for (let i = 1; i <= inputNum; i++) {
//     fact = fact * i;
//   }
//   console.log(`factorial of ${inputNum} is ${fact}`);
// }

//Q-9 How to find the prime numbers in javaScript...?

// var numbers = prompt("enter ur number");

// if (numbers == 1) {
//   console.log(`${numbers} is not prime number `);
// } else if (numbers < 1) {
//   console.log(`prime number of ${numbers} is not possible`);
// } else {
//   for (let i = 1; i < numbers; i++) {
//     if (numbers % i == 0) {
//       var result = `${numbers} is not a prime number`;
//     } else {
//       var result = `${numbers} is prime number`;
//     }
//   }
//   console.log(result);
// }

// Q-10 How to find the vowel from string in javaScript...?
// const string = prompt("enter your string value");

// if (
//   string == "a" ||
//   string == "e" ||
//   string == "i" ||
//   string == "o" ||
//   string == "u"
// ) {
//   console.log(`${string} is vowel`);
// } else {
//   console.log(`${string} is not vowel`);
// }

// second method
// var sting = prompt("enter your sting");
const vawels = ["a", "e", "i", "o", "u"];
const vowelCount = (str) => {
  var count = 0;
  for (let letter of str.toLowerCase()) {
    if (vawels.includes(letter)) {
      count++;
    }
  }
  return count;
};
// console.log(vowelCount(sting));

//  ----------------------------------------------------------------------------------
// Q-11

// questions
let students = {
  name: "ankit",
  age: 14,
  grades: {
    hindi: 85,
    maths: 78,
  },
};

// add computer grades , at the grade section

const addGrade = (students, subject, marks) => {
  if (!students.grades) {
    students.grades = {};
  }
  return (students.grades[subject] = marks);
};

addGrade(students, "computer", 98);
console.log(students);

//  ----------------------------------------------------------------------------------
// qustion:12 write a function findLongesword that takes a string as input and return the longest towaryd in the string. If there are mulitple longest words return the first one encountered.

//* Constraints:
//? The input string may contain alphabetic charaters digits spaces and punctuation.
//? The input string is not empty
//? The input string may contain multiple words separated by space.

// Note:
//? If the input string is empty or cantains only whitespace the function should return an false.
//? The function should dignoure leading and tralling whitespace when determining the longest word.

const longestWord = (str) => {
  if (str.trim().length === 0) {
    return false;
  }
  const Arr = str.split(" ");
  return Arr.reduce((pre, post) => {
    return pre.length > post.length ? pre : post;
  });
};

console.log(
  longestWord("A quick brown fox jumpes over the little lazy dog")
);

//  ----------------------------------------------------------------------------------
// question-13 your are required to impliment a function generatHash that generates a hash tag from a given input string the hash tag should be constructed as follows

//? The input string should be converted to a hash tag format where each word is capitalized and concatenated together without spaces.

//? if the length of the input string is greater than 280 chareacters or if the input strin is empty or contains only whitespace the function should return false.

//?  otherwise the function should return the generated hash tag prefixed with#

//  ----------------------------------------------------------------------------------
// 13. Write a function genreateHash to accomplish this task.

const generateHash = (str) => {
  if (str.length > 280 || str.trim().length === 0) {
    return false;
  }
  const myArr = str
    .split(" ")
    .map((currEle) =>
      currEle.replace(currEle[0], currEle[0].toUpperCase())
    )
    .join("");
  return `#${myArr}`;
};
console.log(
  generateHash("A quick brown fox jumps over the little lozy dog")
); //output #AQuickBrownFoxJumpsOverTheLittleLazyDog

// question 14 write a function called countChar that takes two parameters a string and a character to count. The function should return the number of times the specified character appears in the string

// Todo constrainsts:
//? The function should be case senstive.
//? The function should handle both lowercase and upercase characters.
//? The character paramters can be any printable ADCII character the function should accpet any character that is part of the ASCII character set and is peribtable

const countChar = (word, char) => {
  word.toLowerCase();
  char.toLowerCase();

  totalCount = word.split("").reduce((pre, curr) => {
    if (curr === char) {
      pre++;
    }
    return pre;
  }, 0);
  return totalCount;
};

console.log(countChar("anuradha", "a"));

//  ----------------------------------------------------------------------------------
// write a function called check triangle type that takes three parameters representing the lengths of the side of a triangle. The function should return a string indicating the type of triangle "equilaterral", "isoscelers", "scalene"

// Todo The function should follow all the rules
//? If all three side are of equal length return equilateral.
//? If only two sides are of equal lenth return isosceles
//? if all three side have different lengths return scalene

const myfunk = (equilaterral, isoscelers, scalene) => {
  if (equilaterral === isoscelers && isoscelers === scalene) {
    return "equilaterral";
  } else if (
    equilaterral === isoscelers ||
    isoscelers === scalene ||
    scalene === equilaterral
  ) {
    return "isoscelers";
  } else {
    return "scalene";
  }
};

console.log(myfunk(3, 3, 3));
console.log(myfunk(4, 3, 4));
console.log(myfunk(2, 7, 8));

//  ----------------------------------------------------------------------------------
// write a function to sort an array of numbers in an ascending order
// Todo
//? The function should take an arry of numbers as input
//? It should return a new array with the number sorted in asscending order
//? The original array should remain unchanged.
//? Your are not allowed to use the built-in-sort() method.

const shortfunk = (count) => {
  return count.sort((a, b) => a - b);
};

console.log(shortfunk([5, 3, 8, 2, 1, 0, 7]));

//  ----------------------------------------------------------------------------------
// write a function find max that takes an array of numbers as input and returns the maximum number in the array.

const findmax = (maxNum) => {
  return Math.max(...maxNum);
};

console.log(
  findmax([52, 78, 68, 88, 15, 24, 36, 12, 12, 75, 68, 48])
);

// write a function factorial that takes a non-negative integer num as input and returns its factorial. The factorial of a non-negative integer n denoted as n! is the product of all positive integers less than or equal to n. The factorial of 0 is defined as 1.

// Here are some examples of factorial calculations
// factorial(0) => 1
// factorial(1) => 1
// factorial(2) => 2
// factorial(3) => 6
// factorial(4) => 24
// factorial(5) => 120
// your function should work for any non-negative integer input

const factorial = (num) => {
  if (num === 0) return 1;
  let result = 1;
  for (let i = num; i > 1; i--) {
    result = result * i;
  }
  return result;
};

console.log(factorial(5));

//  ----------------------------------------------------------------------------------
// write a function called calculateAverage that takes an arry of number as input and return the average of those numbers.
// Accept an arry of numbers as input.
// calculate the sum of all the numbers in the array
// Divide the sum by the total number of elements in the array to find the average
// Return the calculated average.

const averageNumber = (num1) => {
  const mynum = num1.reduce((pre, curr) => pre + curr, 0);
  return mynum / num1.length;
};

console.log(averageNumber([1, 8, 5, 6, 0, 8, 9]));

// write a fucntion arrayEqual that takes two arrays arr1 and arr2 as input and returns true if the arrays are equal (i,e contain the same elements in the same order and false otherwise)
// The functions should return the false if the array have different lengths.

const arrayEqual = (arr1, arr2) => {
  if (arr1.join("") === arr2.join("")) {
    return true;
  } else {
    return false;
  }
};

console.log(arrayEqual([1, 2, 3], [1, 2, 3]));
console.log(arrayEqual([1, 5, 3], [1, 2, 6]));
console.log(arrayEqual([], []));

//  ----------------------------------------------------------------------------------
// write a function that takes a number as input and returns the sum of its digits
//? Todo
//? The input number always be positive integer
// The input number can have multiple digits
// The output should be the sum of all the digits in the input number.

// Homework
// This functions calculates the sum of all the digits without converting the number of string

const sumofDigits = (digits) => {
  const mynum = digits.toString().split("").map(Number);
  return mynum.reduce((pre, curr) => pre + curr, 0);
};

console.log(sumofDigits(13485));

// split ek array method hai, or array pr he work krta hai, ya string pr work krta hai remeber this thing

// write a function that takes an array of integers as input and removes any dublicates elements returning

const removeDublicate = (dublicate) => {
  const newArr = [...new Set(dublicate)];
  return newArr;
};

console.log(removeDublicate([1, 8, 2, 2, 4, 6, 8, 10, 2, 5]));

// The new Set() method in javaScript creates a new set object . A set object is a collection of unique value. It can store any type of value, whether primitive values or object reference

//  ----------------------------------------------------------------------------------

// Write a function that takes a string as input and returns the cout of vowels in that string. Consider a,e,i,o,u as vowel (both lowercase and uppercase)

// Constraints:
// The input string may contain letters in both uppercase and lowercase.
// The output should be a non-negative integer representing the count of vowels in the input string.

const findVowel = (str) => {
  const vowel = ["a", "e", "i", "o", "u"];

  const myArr = str.split("").reduce((pre, post) => {
    if (vowel.includes(post.toLowerCase())) {
      pre.push(post);
    }
    return pre;
  }, []);
  return myArr;
};

console.log(findVowel("Radha Maa"));

//  ----------------------------------------------------------------------------------
// Write a function called isPowerTwo that takes an integer num as input and returns true if num is power of two and false otherwise.

// Notes:
//? The input num will be positive integer.
//? Zero and negative integers are considered of powers of two
//? The function should return true if the given number is power of 2 and false otherwise.

const PowerOfTwo = (num) => {
  let op = false;
  for (let i = 1; i < num; i++) {
    if (2 ** i === num) {
      op = true;
    }
  }
  return op;
};

// use Bitwise operator method
const PowerOfTwo1 = (num) => {
  if (num < 0) {
    return false;
  }
  return (num & (num - 1)) === 0; //behaviour odd even number
};

console.log(PowerOfTwo(64)); // true
console.log(PowerOfTwo1(7)); // false

//  ------------------------------------------------------------------------------------------

// write a function to calculate the sum of squares of all elements in an array. For example, fiven the array [1,2,3] the function should return 14 because 1*1 + 2*2 + 3*3  = 1+4+9 = 14

const sumofSquare = (num) => {
  const result = num.reduce(
    (pre, post) => (pre = pre + post * post),
    0
  );
  return result;
};
console.log(sumofSquare([5, 5, 8]));

//  ----------------------------------------------------------------------------------

// write a function findMin that takes an array of numbers as input and return the minimum value found in the array

// Constraints
//? The input array may contain both positive and negative integers.
//? The input array may be empty.
//? The input array may contain duplicate values.

const findMinNumber = (minNum) => {
  return Math.min(...minNum);
};

console.log(findMinNumber([80, 57, 21, 95, 52, 35, 78, 51, 78]));

//  ----------------------------------------------------------------------------------

// write a function to convert a string to camelCase and snake_case

const toCamelCase = (str) => {
  str = str.trim().split(" "); // Split the string into an array

  str = str.map((currEle, index) => {
    if (index === 0) {
      return currEle.toLowerCase(); // First word remains lowercase
    } else {
      return (
        currEle.charAt(0).toUpperCase() + // Capitalize the first letter of subsequent words
        currEle.slice(1).toLowerCase()
      );
    }
  });

  return str.join(""); // Join the array back into a string
};

console.log(toCamelCase("hello world anKit"));

//  ----------------------------------------------------------------------------------

// write a function to check if a character is uppercase or lowercase.
// Constrains:
//? The input char will be a single character.
//? The character can be any printable ASCII character.
//? you can assume that the input will always be a string of length 1

const isUpperCase = (str) => {
  if (str.toUpperCase() || str.toLowerCase()) {
    return true;
  } else if (str.length === 0) {
    return false;
  }
  return str;
};

console.log(isUpperCase("h"));

//  ---------------------------------------------------------------------------------------

// write a function to check if a given string starts with a specific substring.

// Constrains:
//? A string ("Hello world")
//? subStr :  A substring to check if it starts the given string ("hello")
//? output : true if the given string starts with the specified substring otherwise false.

const startsWith = (str, substr) => {
  return str.toLowerCase().startsWith(substr.toLowerCase());
};

console.log(startsWith("Hello world", "hello"));
console.log(startsWith("Hello world", "World"));

//  ----------------------------------------------------------------------------------------

// write a function to a string with using any built-in methods or libraries. The function should take a string as input and return the reversed string.

const reverseString = (str) => {
  return str.split("").reverse().join("");
};

console.log(reverseString("hellow"));
