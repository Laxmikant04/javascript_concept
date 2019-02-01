/**
 * curring is a technique of eveluating function with multiple arguments as , sequence of functions with single argument
 * i.e function will take one argument and return a function which will take next argument * 
 */

var add =   function (a){
    return function(b){
          return function(c){
                 return a+b+c;
                 }        
           }
     }
console.log(add(2)(3)(4)); //output 9
console.log(add(3)(4)(5)); //output 12

/**
 * curring are useful for creating higher oeder function. which are quite helpful in event handling.
 */

 