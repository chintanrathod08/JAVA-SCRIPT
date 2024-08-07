function q3(){

    let ch = document.getElementById("data").value;

    let result = 
        (ch >= 'A' && ch <= 'Z') ? 'Uppercase letter' :
        (ch >= 'a' && ch <= 'z') ? 'Lowercase letter' :
        (ch >= 0 && ch <= 10) ? 'Digit' : 'Special character';

        document.getElementById('ans').innerText =result;
}