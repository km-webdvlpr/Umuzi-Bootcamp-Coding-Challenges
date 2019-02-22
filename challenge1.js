
/*
Make a JavaScript program that checks two numbers and returns true if one of the numbers is 65 or if their sum is 65.
*/

function check65(a,b) 
{
  return ((a == 65 || b == 65) || (a + b == 65));
    /*The logical operator||compares two values of operands and returns true  if they're equal the number 65 or false if they are not. If the values of the variables of both numbers add up to 65 it will also return true*/
    }
console.log(check65(65,65))
console.log(check65(65,0))
console.log(check65(0,65))
console.log(check65(12,1))