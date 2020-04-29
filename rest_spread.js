/*
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
*/