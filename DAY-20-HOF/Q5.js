//  Write a function that checks if all elements in an array of numbers are positive. Use the every method.

let Num = [1, 2, 3, 4, 5];

let ans = Num.every((element,index)=>{
 
    if(element>0){
        return element
    }
  
})
console.log(ans);




