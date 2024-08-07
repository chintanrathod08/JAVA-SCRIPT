function q1(){

    let a = document.getElementById("data").value

    let sum = 0;

    for( let n = 1 ; n <= a; n++ ){

        if ( n %2 == 0 ) {
            sum = sum + n;
        }

    }

    document.getElementById("ans").innerText = `${sum}`;

}