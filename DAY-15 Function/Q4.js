function calculateFactorial(a){

    let sum = 1;

    for( let x = 1; x <= a; x++ ){
        sum *= x
    }
     return sum;

}
console.log(calculateFactorial(5));
