// 1. Write a function that takes a positive integer as input and returns the sum of its digits.

function fun(data){

  let sum = 0;

  for(let x = 0; x < data.length ; x++){
    
    sum += +(data[x])
  
  }

  return sum;
  
}


console.log(fun("12345"));
