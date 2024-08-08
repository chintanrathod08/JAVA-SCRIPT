function isPrime(){

    n = document.getElementById("num").value;

    let count = 0;

    

    for ( let a = 1; a <= n ; a++){
        
        if( n % a == 0 ){
            count ++;
        }

    }



    if( count == 2 ){
        document.getElementById("ans").innerHTML = `${n} Is Prime Number ` 
    }
    else{
        document.getElementById("ans").innerHTML = `${n} Not a Prime Number `
    } 
}


isprime()
