//Write a function areAllPositive that takes an array of numbers as input and returns true if all numbers in the array are positive using the every method.

let arr1 = [1, 2, 3, 4, 5]

function areAllPositive (ans1){

    return ans1.every((ele1)=>{
    
        return ele1 > 0

    })

}
console.log(areAllPositive(arr1));


