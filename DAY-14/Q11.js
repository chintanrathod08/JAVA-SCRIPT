function printMultiplicationTable(num){

    let sum = 1;
    for ( let x = 1; x <= 10; x++ ){
        sum =  x * num;
        console.log("3 *",x,"=",sum);
     }
}
printMultiplicationTable(3)
