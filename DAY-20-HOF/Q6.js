// : Write a function that checks if at least one element in an array is greater than 100. Use the some method.

let arr = [10, 20, 30, 150, 60];

let ans = arr.some((element)=>{

    if(element>100){
        return element
    }

})
console.log(ans);
