function q5(){

    let purchase_amount = document.getElementById("data").value;
    let discount, total;

    if(purchase_amount <= 100){
       
        document.getElementById("h1").innerText = `No discount `;
        document.getElementById("h2").innerText = `Total purchase amount is : ${purchase_amount}`;
    
    }   
    else if(purchase_amount >= 100 && purchase_amount < 500){
        discount = (purchase_amount * 5)/100;
        total = (purchase_amount - discount);
        document.getElementById("h1").innerText = `Discont is : ${discount}`;
        document.getElementById("h2").innerText = `Total purchase amount is : ${total}`;
    
    }
    else if(purchase_amount >= 500 && purchase_amount < 1000){
        discount = (purchase_amount * 10)/100;
        total = (purchase_amount - discount);
        document.getElementById("h1").innerText = `Discont is : ${discount}`;
        document.getElementById("h2").innerText = `Total purchase amount is : ${total}`;
    
    }
    else if(purchase_amount >= 1000 ){
        discount = (purchase_amount * 15)/100;
        total = (purchase_amount - discount);
        document.getElementById("h1").innerText = `Discont is : ${discount}`;
        document.getElementById("h2").innerText = `Total purchase amount is : ${total}`;
    
    }
}