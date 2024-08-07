function findFactorial (x){

    let sum = 1;

    for( let a = 1; a<=x; a++ ){
        sum *= a;
    } 
    return sum;
}
console.log(findFactorial(5));
