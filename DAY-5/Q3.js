function q3(){

    let c = document.getElementById("ent").value
    
    if(c%4==0){
      //  console.log("Leap year");
       document.getElementById("sp").innerHTML = ("Leap year")
    }
    else{
       // console.log("Not a leap year");
        document.getElementById("sp").innerHTML = ("Not a leap year")
    }
}