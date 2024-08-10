// Write a function that takes a string as input and returns the string reversed using a loop.

function fun(str){

    let reverse = "";
    
    for(let x = str.length - 1 ; x >= 0; x--){
        reverse += str[x];
    }

    return reverse;

}
console.log(fun("Hello"));

