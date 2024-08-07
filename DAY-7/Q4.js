function q4() {

    let temp = +document.getElementById("data1").value;
    let press = document.getElementById("data2").value;

    let ans;

    if (press == 'c') {


        ans = (temp - 32) * 5 / 9;
        document.getElementById("h1").innerText = `Celsius : ${ans}`

    }
    else if (press == 'f') {

        ans = (temp * (9 / 5)) + 32;

        document.getElementById("h1").innerText = `Fahrenheit : ${ans}`

    }

}