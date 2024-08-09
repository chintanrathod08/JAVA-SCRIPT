function isPrime(num){

    let count = 0;
    for( let a = 1; a<= num; a++ ){

        if( num %a ==0){
            count ++;
        }
        
    }

    if(count == 2  ){
        return true ;
    }
    else{
        return false ;
    }
}

console.log(isPrime(10));
