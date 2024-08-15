// Q-1 How to find duplicate elements in a given Array...?

const Arry = [1, 8, 7, 4, 2, 2, 4, 7, 8, 9, 7];
const duplicate = Arry.filter(
  (ele, index, arr) => arr.indexOf(ele) !== index
);
console.log(duplicate);

// -----------------------------------------------------------------------------------------------------------

// Q-2 How to find the max and min value in a given Array in javaScript...?

const arr = [5, 87, 52, 47, 36, 54, 84, 20, 64];

const maxvalue = (arr) => {
  return arr.reduce(function (pre, curr) {
    return pre > curr ? pre : curr;
  });
};
console.log(maxvalue(arr));

//find min value
const minvalue = (arr) => {
  return arr.reduce(function (pre, curr) {
    return pre < curr ? pre : curr;
  });
};
console.log(minvalue(arr));

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

// Q-4 what is the diffrence between == and === ...?

var x = 7;
var y = "7";
console.log(x == y);
console.log(x === y);

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

// Q-7 How to find the sum of all elements in a given array[] in javaScript...?

const num = [4, 5, 2, 7, 41, 52, 3, 54, , 52, 2, 85];
const sum = (item) => {
  return item.reduce((pre, curr) => {
    return pre + curr;
  });
};
console.log(sum(num));

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
var sting = prompt("enter your sting");
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
console.log(vowelCount(sting));
// Q-11
