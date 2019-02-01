/* 
scope defines the availability/visibility of variable,function and object with in the block of code.
type-
1. global
2. local
*/

var greeting='Welcome to blog';  //global scope
(function(){
  console.log(greeting); //Output: Welcome to blog
})();

(function(){
    var greetingLocal = 'Welcome to blog'; //local scope
    console.log(greetingLocal); //Output: Welcome to blog
  })();
  console.log(greetingLocal); //Output:Reference-Error greeting not defined