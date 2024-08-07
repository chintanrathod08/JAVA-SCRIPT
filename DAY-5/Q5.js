function q5(){

    let a = document.getElementById("ent1").value
    let b = document.getElementById("ent2").value
    let c = document.getElementById("ent3").value
  
    if(a==b && b==c && c==a){
       // console.log("Equilateral");
        document.getElementById("sp").innerHTML = ("Equilateral")
    }
    else if (a!=b && b!=c && c!==a){
       // console.log("Scelene");
        document.getElementById("sp").innerHTML = ("Scelene")
    }
    else{
       // console.log("Isosceles");
        document.getElementById("sp").innerHTML = ("Isosceles")
    }
}