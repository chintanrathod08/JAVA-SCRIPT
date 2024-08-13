let scores   = [1,2,3,4,5]
let avg, sum = 0;

for( let n = 0; n < scores.length; n++ ){
  sum += scores[n];
  avg = sum /10 ;
}
console.log(avg);

