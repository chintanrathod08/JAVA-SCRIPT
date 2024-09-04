// Write a function doubleNumbers that takes an array of numbers as input and returns a new array where each number is doubled.

let arr = [1, 2, 3, 4]

function doubleNumbers (ans){

    return ans.map((ele)=>{
        return ele * 2
    })

}
console.log(doubleNumbers(arr));
