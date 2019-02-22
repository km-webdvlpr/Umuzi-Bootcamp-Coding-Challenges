/*
Make a JavaScript program that returns the area of a triangle where the lengths of its three sides are 7, 8, 9. (Using Side Lengths method)

Refererences used to Research Formula:
https://www.wikihow.com/Calculate-the-Area-of-a-Triangle
https://www.khanacademy.org/math/geometry-home/geometry-volume-surface-area/heron-formula-tutorial/v/heron-s-formula
*/

var sideT = 7;
var sideR = 8;
var sideI = 9;

//variable(container) used to store data in program, with assigned values


var semip = (sideT+sideR+sideI)/2;
//The above shows calculation of the semiperimeter of the triangle
var Areaoftriangle = Math.sqrt(semip*((semip-sideT)*(semip-sideR)*(semip-sideI)));
/*
The above shows Heron’s formula. The Math.sqrt()function in JavaScript is used to square root of the number passed as parameter to the function. 
*/
console.log(Areaoftriangle);
//The above displays content(Area of Triangle) to the JavaScript console
