function q2(){

    let year = +document.getElementById("data1").value;
    let amount = +document.getElementById("data2").value;
    let si, total;

    if( amount < 1000){
        si = ( amount * 5 * year )/100;
        total = si + +amount;
        document.getElementById("h1").innerHTML = `Total amount is : ${total}`;
       
    }
    else if ( amount > 1000 && amount <=5000 ){
        si = ( amount * 7 * year )/100;
        total = si + +amount;
        document.getElementById("h1").innerText = `Total amount is : ${total}`;
    }
    else if ( amount > 5000){
        si = ( amount * 10 * year )/100;
        total = si + +amount;
        document.getElementById("h1").innerText = `Total amount is : ${total}`;
    }
}