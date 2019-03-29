//A closure is an inner function that has access to the outer function’s variables
//with the use of closure , we can achive private properties and functions.


function User(name){
    var displayName = function(greeting){
     console.log(greeting+' '+name);
    }
  return displayName;
  }
  var myFunc = User('Raj');
  myFunc('Welcome '); //Output: Welcome Raj
  myFunc('Hello '); //output: Hello Raj



//private properites and functions

var myModule = function() {
    'use strict';
 
    var _privateProperty = 'Hello World';
     
    function _privateMethod() {
        console.log(_privateProperty);
    }
     
    return {
        publicMethod: function() {
            _privateMethod();
        }
    };
}();
  
myModule.publicMethod();                    // outputs 'Hello World' 
//protected by the closure  
console.log(myModule._privateProperty);     // is undefined      
myModule._privateMethod();                  // is TypeError protected by the module closure


