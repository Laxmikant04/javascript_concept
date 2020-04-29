/*
Iteration over the items of collection is very commom .Javascript provides may functions to do that eg: for,map,filer etc.

Iterator/Generator brings the concept of iteration into the core language.

Iterator :  Iterators are any object that implements iterator protocal by using the next() method that returns tro properrties- 

data: contains the next value in the iteration sequence.

done : This is true if the last value in the sequence has already been consumed

iterator protocal : Iterator protocal defines a ways of generating sequence of values (finite or infinite) and returns a value when all sequence values
 are consumes.

Example Iterator - 
*/
function myIterator() {
var array = [1, 2];
return {
    next: function() {
    if (array.length) {
        return {
        value: array.shift(),
        done: false
        };
    } else {
        return {
        done: true
        };
    }
    }
};
}

var iterator = myIterator();
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { done: true }

/*
Implemnting a iterator from scratch can be a difficult task it developer needs to take care of internal states that's where generator comes into picture.

Generators: generators is an alternative way to implement the iterator function. Generator defines an Iterator by defining a function whose execution is not 
continuous.  Generator functions are written using the function* syntax..

When called, generator functions do not initially execute their code. Instead, they return a special type of iterator, called a Generator.
When a value is consumed by calling the generator's next method, the Generator function executes until it encounters the yield keyword.

Example:-
*/

function* myGenerator() {
    var array = [1, 2];
  
    while (array.length) {
      yield array.shift();
    }
  }
  
  var generator = myGenerator();
  console.log(generator.next()); // { value: 1, done: false }
  console.log(generator.next()); // { value: 2, done: false }
  console.log(generator.next()); // { value: undefined, done: true }


/*
Iterables: Iterables are any object the implements @@iterator menthod . which means object must have Symbol.iterator key.

Iterables which can iterate only once (such as Generators) customarily return this from their @@iterator method,
whereas iterables which can be iterated many times must return a new iterator on each invocation of @@iterator.
*/

function* makeIterator() {
    yield 1;
    yield 2;
}

const it = makeIterator();

for (const itItem of it) {
    console.log(itItem);
}
console.log("next--")
for (const itItem of it) {
    console.log(itItem);
}

it[Symbol.iterator] = function* () {
    yield 2;
    yield 1;
  };

console.log("multiple")
for (const itItem of it) {
    console.log(itItem);
}
console.log("next--")
for (const itItem of it) {
    console.log(itItem);
}
