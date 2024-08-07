function q2(){

    let age = document.getElementById("data").value;
  

     ( age >= 0 && age <= 12) ? 
    document.getElementById("ans").innerText = `You Are In Child Categorize`


    : (age >= 13 && age <= 19) ?
    document.getElementById("ans").innerText = `You Are In Teenager Categorize`
         
    

    : (age >= 20 && age <= 59) ? 
    document.getElementById("ans").innerText = `You Are In Adult Categorize`
         
    
    : (age >= 60) ?
    document.getElementById("ans").innerText = `You Are In Senior Citizen Categorize` : ""
    
}    