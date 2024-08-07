function q3(){

    let age = document.getElementById("data").value

    if( age < 1){
        document.getElementById("h1").innerText = `You Are In Infant Categorize`;
    }

    else if( age >= 1 && age <= 12){
        document.getElementById("h1").innerText = `You Are In Child Categorize`;
    }

    else if (age >= 13 && age <= 19) {
        document.getElementById("h1").innerText = "You Are In Teenager Categorize"
    }

    else if (age >= 20 && age <= 64) {
        document.getElementById("h1").innerText = "You Are In Adult Categorize"
    }

    else if (age >= 65) {
        document.getElementById("h1").innerText = "You Are In Senior Citizen Categorize"
    }

}