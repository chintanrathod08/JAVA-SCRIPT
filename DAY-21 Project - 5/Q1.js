// Write a function doubleNumbers that takes an array of numbers as input and returns a new array where each number is doubled using the map method.

let arr = [5,10,15,20,25]

function doubleNumbers(ans){

    return ans.map((ele)=>{
        return ele * 2;
    })

}
let ans = doubleNumbers(arr)
console.log(ans);
