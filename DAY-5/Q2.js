function q2(){

    let b = document.getElementById("ent").value
    

    if(b >= 90){
        // alert("get A grade : ");
        document.getElementById("sp").innerHTML = ("get A grade")
    }
    else if (b >= 80 && b <= 89){
        // alert("get B grade : ");
        document.getElementById("sp").innerHTML = ("get B grade")
    }
    else if (b >= 70 && b <= 79) {
       // alert("get C grade : ");
        document.getElementById("sp").innerHTML = ("get C grade")
    }
    else if (b >= 60 && b <= 69) {
        // alert("get D grade : ");
        document.getElementById("sp").innerHTML = ("get D grade")
    }
    else{
        // alert("get F grade");
        document.getElementById("sp").innerHTML = ("get F grade")
    }
}