// Write a function findIndex that takes an array of numbers and a target number as input and returns the index of the target number using the indexOf method.

let arr = [10, 25, 178, 70, 100]

function findIndex (ans){

   return ans.findIndex((ele)=>{
    return ele > 80

   })

}
console.log(findIndex(arr));
