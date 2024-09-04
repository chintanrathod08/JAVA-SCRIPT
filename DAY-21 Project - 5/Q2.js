// Write a function getEvenNumbers that takes an array of numbers as input and returns a new array containing only the even numbers using the filter method.

let arr = [1, 2, 3, 4, 5, 10, 11, 12]

function getEvenNumbers (ans){

    return ans.filter((ele)=>{
        return ele %2 == 0
    })

}
console.log(getEvenNumbers(arr));
