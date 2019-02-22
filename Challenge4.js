/*Make a JavaScript program to convert any number into hours and minutes. (For example, 71 will become 1 hour, 11 minutes; 133 will become 2 hours, 13 minutes.)
Reference link used to research problems:
https://www.tutorialspoint.com/javascript/index.html
https://www.youtube.com/watch?v=-r7JwuSdj5M
*/

function transform(num){
    //Declared function name is transform
var hrs = Math.floor(num/60);
    // Math.floor() to round the number down to nearest (integer) whole number.
var min = num/60;
    // represent number of minutes  
return (hrs + "hours" + ":" + min + "minutes").toString();   
    //two strings for hours and minutes to represented 
}
console.log(transform(99));
//Change num which converts minutes to hours