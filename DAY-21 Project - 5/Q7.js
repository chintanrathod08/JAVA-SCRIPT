// Write a function hasAnyEvenNumber that takes an array of numbers as input and returns true if at least one number in the array is even using the some method.

let arr = [1, 2, 3, 5, 7, 9, 11]

function hasAnyEvenNumber (ans){

    return ans.some((ele)=>{

        return ele %2 == 0

    })

}
console.log(hasAnyEvenNumber(arr));
