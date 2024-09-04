// Write a function printSquare that takes an array of numbers as input and prints the square of each number.

let arr = [1, 2, 3, 4];


function printSquare (ans){

    return ans.forEach((ele)=>{

        let sqr = ele * ele

        console.log(sqr);
    
    })

}
printSquare(arr)
