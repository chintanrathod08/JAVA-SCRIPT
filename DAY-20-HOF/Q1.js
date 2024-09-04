// Given an array of numbers, write a function that first filters out all even numbers and then maps the remaining numbers to their squares. Return the resulting array.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let ans1 = arr.filter((element,index)=>{

    if (element % 2 != 0){
        return element
    }

})
console.log(ans1);


let ans2 = ans1.map((element,index)=>{

    return element * element

})

console.log(ans2);





