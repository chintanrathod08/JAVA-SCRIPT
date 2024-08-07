function q1(){

    let a = document.getElementById("data1").value;
     b = document.getElementById("data2").value;
     c = document.getElementById("data3").value;
     d = document.getElementById("data4").value; 

     (a >= b && a >= c && a >= d) ?
    document.getElementById("ans").innerText = `A is max`

    : (b >= c && b >= d) ?
    document.getElementById("ans").innerText = `B is max`

    : (c >= d) ?
    document.getElementById("ans").innerText = `C is max` 
    
   : document.getElementById("ans").innerText = `D is max`

}