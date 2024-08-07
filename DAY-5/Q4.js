function q4(){

    let d = document.getElementById("ent").value
    

    if(d >=0 && d <=90){
       //  console.log("First quadrant : ");
        document.getElementById("sp").innerHTML = ("First quadrant");
    }
    else if (d > 90 && d <= 180){
        // console.log("Second quadrant : ");
        document.getElementById("sp").innerHTML = ("Second quadrant");
    }
    else if (d > 180 && d <= 270) {
        // console.log("Third quadrant : ");
        document.getElementById("sp").innerHTML = ("Third quadrant");
    }
   else if ( d > 270 && d <= 360){
       //  console.log("Forth quadrant : ");
        document.getElementById("sp").innerHTML = ("Forth quadrant");
    }
   else{
    // console.log("Please enter Correct value");
    document.getElementById("sp").innerHTML = ("Please enter Correct value");
   }
}