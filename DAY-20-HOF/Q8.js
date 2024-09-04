// Given an array of ages, filter out the ages that are not eligible to vote (less than 18 years old). Use the filter method.

let arr = [12, 17, 19, 21, 15, 28]

let ages = arr.filter((element,index)=>{

    if(element>=18){
        return element   
     }
     
})
console.log(ages);
