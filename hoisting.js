//hoisting is a  mechanism in which javascript moves variable and function declaration
// at the top of their scope before execution.

//Note : hoisting works only with declaration and not with initilization

console.log("param1-"+param1) // hoisting would not work
var param1="variable 1";

console.log("param2-"+param2) // hoisting would not work
let param2;
param2="variable 2";

param3="variable 3";
console.log("param3-"+param3) // hoisting would work
var param3;


console.log(Sum(5, 5)); // 10 hoisting would work
function Sum(val1, val2)
{
    return val1 + val2;
}


//Add(5, 5); // would throw error as hoisting does not work with function expression
var Add = function Sum(val1, val2)
{
    return val1 + val2;
}

//functiona are hoisted before variables

console.log(UseMe);

var UseMe;

function UseMe()
{            
    console.log("UseMe function called");
}