// (2) Write a function containsString that takes an array of strings and a target string as input and returns true if the target string is present in the array using the includes method.

let colors = ['red', 'yellow', 'green' ,'black']

function containsString (colors){

   return colors.includes('green')

}
console.log(containsString(colors));
