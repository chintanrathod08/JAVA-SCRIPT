function q4(){

    var a = document.getElementById("data").value;

    (a%3 == 0 && a%5 == 0) ?
    document.getElementById("ans").innerText = `FizzBuzz`

    : (a%3 == 0)?
    document.getElementById("ans").innerText = `Fizz`

    : (a%5 == 0)?
    document.getElementById("ans").innerText = `Buzz` : ""

}