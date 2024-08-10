//5. Write a function that computes the factorial of a given positive integer using a loop.

function fun(num){

    let sum =1;

    for(let n = 1; n<=num; n++){
        sum *= n;
    }
    return sum;

}
console.log(fun(5));
