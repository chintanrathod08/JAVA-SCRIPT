// 4. Implement a function that calculates the power of a number using a loop.

function fun(num1 ,num2){

    let a = 1;

    for(let n =1; n<=num2; n++){
        a = a*num1
    }

    return a;

}
console.log(fun(2,3));


