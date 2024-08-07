function q2(){

    let a = document.getElementById("data").value

    let z = 1;

    for( let n = 1 ; n <= a; n++ ){

        z = z * n;
        
    }

    document.getElementById("ans").innerText = `${z}`;

}