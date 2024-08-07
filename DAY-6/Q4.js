function q4(){

    let Year = document.getElementById("data").value;


    if (Year < 1) {
        document.getElementById("h1").innerText = "Ancient Time";
    }
    else if (Year >= 1 && Year <= 1500) {
        document.getElementById("h1").innerText = "Medieval Time";
    }
    else if (Year >= 1501 && Year <= 2024) {
        document.getElementById("h1").innerText = "Modern Time";
    }
    else if (Year >= 2025) {
        document.getElementById("h1").innerText = "Future Time";
    }
   
}