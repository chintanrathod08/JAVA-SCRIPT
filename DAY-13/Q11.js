// Question 11 : Write a function named printMultiplicationTable that takes a number as input and prints its multiplication table from 1 to 10.

function printMultiplicationTable(){

    let sum = 1;
    for ( let x = 1; x <= 10; x++ ){
        sum =  x * 3;
        console.log("3 *",x,"=",sum);
     }
}
printMultiplicationTable()
