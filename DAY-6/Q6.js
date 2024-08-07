function q6(){

    let temperature = document.getElementById("data").value;


    if (temperature > 30) {
        document.getElementById("h1").innerText = `Temperature is Hot`;

    }
    else if (temperature >= 15 && temperature <= 30) {
        document.getElementById("h1").innerText = `Temperature is Moderate`;

    }
    else if (temperature < 15) {
        document.getElementById("h1").innerText = `Temperature is Cold`;

    }





}