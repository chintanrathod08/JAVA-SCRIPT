// Write a function areAllStringsLong that takes an array of strings as input and returns true if all strings in the array have a length greater than 5 characters using the every method.

let arr = ['Adidas', 'Calvinklein', 'Reebok', 'lacoste', 'woodland']


function areAllStringsLong(ans){

    return ans.every((ele)=>{

        if(ele.length>=5){
            return ele
        }

    })

}
let str = areAllStringsLong(arr)

console.log(str);


