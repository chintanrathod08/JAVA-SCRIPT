function q2(){

    let perunit = document.getElementById("data").value
    let monthaly_bill;

    if( perunit <= 100){
        monthaly_bill = perunit * 0.1;
        document.getElementById("h1").innerText = `Total electricity bill is : ${monthaly_bill}`;
    }
    else if( perunit >= 101 && perunit <= 200){
        monthaly_bill = perunit * 0.15;
        document.getElementById("h1").innerText = `Total electricity bill is : ${monthaly_bill}`
    }
    else if( perunit >= 201 && perunit <= 300){
        monthaly_bill = perunit * 0.2;
        document.getElementById("h1").innerText = `Total electricity bill is : ${monthaly_bill}`
    }
    else if( perunit >= 301){
        monthaly_bill = perunit * 0.25;
        document.getElementById("h1").innerText = `Total electricity bill is : ${monthaly_bill}`
    }
}