/**
 * callback function is a function which is passed as an arguments to another function.
 * callback functions are executed inside parent function to complete some kind of task.
 * 
 * Uses-
 * callback are uses to work with asynchronous calls in javascript.
 *   
 */

function greeting(name) {

    console.log('Hello '+name);
   }

function processUserInput(callback) {
    var name='raja';
    callback(name);
  }
  processUserInput(greeting); //passing greeting as callback function , output Hello Raja