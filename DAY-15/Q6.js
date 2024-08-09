

function fun(){

    for( let x = num; x<=num; x++ ){
        console.log(num);
        
    }

    function isPrime(num){

    document.getElementById("data").value 
    
    let count = 0

    for( let a = 1 ; a <= num ; a++){
        if( num %a == 0 ){
            count++
        }
    }

    if( count == 0 ){
        document.getElementById("ans").innerHTML = `${num} is Prime Number`
    }
    else{
        document.getElementById("ans").innerHTML = `${num} Not a Prime Number`
    }

}
isPrime(num)

}