function q3(){

    let amount = +document.getElementById("data").value;
    let charge = 50 , tax ,total_bill;

    if(amount < 500){
        tax = (amount * 10)/100;
        total_bill = ( amount + charge + tax );
        document.getElementById("h1").innerText = `Total bill amount is : ${total_bill}`;
    }
    else if (amount >= 500 && amount <=500){
        tax = (amount * 15)/100;
        total_bill = ( amount + charge + tax );
        document.getElementById("h1").innerText = `Total bill amount is : ${total_bill}`;
    }
    else if (amount >= 1000){
        tax = (amount * 20)/100;
        total_bill = ( amount + charge + tax );
        document.getElementById("h1").innerText = `Total bill amount is : ${total_bill}`;
    }
}