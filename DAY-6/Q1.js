function q1(){

    let income = document.getElementById("data").value;
    let total, tax;

    if(income <= 10000){
        tax = (income * 5)/100;
        total = income - tax;
        document.getElementById("h1").innerText = `Tax is : ${tax}`;
        document.getElementById("h2").innerText = `Final income is : ${total}`;
    
    }   
    else if(income >= 10001 && income <= 50000){
        tax = (income * 10)/100;
        total = income - tax;
        document.getElementById("h1").innerText = `Tax is : ${tax}`;
        document.getElementById("h2").innerText = `Final income is : ${total}`;
    
    }
    else if(income >= 10001 && income <= 50000){
        tax = (income * 15)/100;
        total = income - tax;
        document.getElementById("h1").innerText = `Tax is : ${tax}`;
        document.getElementById("h2").innerText = `Final income is : ${total}`;
    
    }
    else if(income >= 10001 && income <= 50000){
        tax = (income * 20)/100;
        total = income - tax;
        document.getElementById("h1").innerText = `Tax is : ${tax}`;
        document.getElementById("h2").innerText = `Final income is : ${total}`;
    
    }
}