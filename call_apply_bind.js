/**
 * call apply and bind methods are used to execute a functions from different scopes Or over different ojects.
 
 * Difference-
    Call accepts parameters in form of comma seprated arguments.
    Apply accepts parameters as an array of arguments.

    Bind accepts parameters as comma seprated arguments and it returns a refrence to function which can be executed later
    where both Call and Apply gets executed as soon as called.
 */


var obj={
    num : 2
 }
 var add = function(num2,num3,num4){
    return this.num + num2 + num3 + num4;
 }
 var arr=[3,4,5];
 //Call method 
 console.log(add.call(obj,3,4,5));  //Output : 14 //params as comma seprated and code executes as soon as called
 //Apply method
 console.log(add.apply(obj,arr));   //Output : 14 //params as array and code executes as soon as called
 //bind Method
 var bound = add.bind(obj);                       ////params as comma seprated and returns a refrence fuction
 console.log(bound(3,4,5));         //output : 14 

 
 //https://medium.com/@madasamy/15-javascript-concepts-that-every-nodejs-programmer-must-to-know-6894f5157cb7