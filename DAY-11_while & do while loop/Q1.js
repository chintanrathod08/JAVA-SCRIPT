function q1(){

    let a = document.getElementById("data").value

    let  sum = 0;

    while ( x = 1 , x <= a ){
        if( x %2 == 0 ){
            sum = sum + x;
        }
    }
    document.getElementById("ans").innerHTML = `${sum}`
}