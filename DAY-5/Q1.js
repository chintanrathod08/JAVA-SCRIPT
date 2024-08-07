function q1(){

    let a = document.getElementById("ent").value
    

    if(a > 0){
        // alert("number is positive : ");
         document.getElementById("sp").innerHTML = ("Number is positive");
    }
    else if (a == 0){
       // alert("number is zero : ");
         document.getElementById("sp").innerHTML = ("Number is zero");
    }
    else{
       //  alert("number is negative : ");
        document.getElementById("sp").innerHTML = ("Number is negative");
    }


}