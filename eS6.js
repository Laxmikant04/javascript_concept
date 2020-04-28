/**
 * Importent New features
 * 
 * Let and Const keyword - block scope
 * Added default parameter values.
 * Array functions - foreach,map,filter , reduce
 * arrow functions
 * Classes - inheritance with extends
 * Improved object litrals - Properties and functions
 * template strings
 * Promises/async await
 */

Current version - ES10 (as per wiki)
https://www.w3schools.com/js/js_versions.asp

Some new Feature in next versions= 
Iterator/generator
Promise.finally()
Shared memory concept :
  Shared memory allows javascript threads to access and update same shared memory data. Hence all thread will always see same data.
  Without shared memory concept , thread shares the data as the copy of original data so every thread will have it's own copy and
  will access and update the same.
  With shared memory concept ,thread shares a copy SharedArrayBuffer object which points to the original data so every thread will
  point the original data and access/update the same.
  more info - https://www.hongkiat.com/blog/shared-memory-in-javascript/
  
string padding concept:
  1)padStart -
  The padStart() method pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length.
  The padding is applied from the start of the current string.
  
  Eg: const str1 = '5';
    console.log(str1.padStart(2, '0'));
    // expected output: "05"

  2)padEnd-
  The padEnd() method pads the current string with a given string (repeated, if needed) so that the resulting string reaches a given length.
  The padding is applied from the end of the current string.
  
  Eg:
  const str2 = '200';
  console.log(str2.padEnd(5));
  // expected output: "200  "

rest / spread properties:
  rest parameter ( three dot ...para) : The rest parameter syntax allows us to represent an indefinite number of arguments as an array.
  function f(a, b, ...theArgs) {
  // ...
  }
  
  Spread syntax allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls)
  or elements (for array literals) are expected.
  
  Syntax
  For function calls:
  myFunction(...iterableObj);

  For array literals or strings:
  [...iterableObj, '4', 'five', 6];

  For object literals (new in ECMAScript 2018):
  let objClone = { ...obj };

  Eg:-
  function sum(x, y, z) {
    return x + y + z;
  }
  const numbers = [1, 2, 3];
  console.log(sum(...numbers));
  // expected output: 6
  
