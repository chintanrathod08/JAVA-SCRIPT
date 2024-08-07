function q5(){

    let password = document.getElementById("data").value;

     password.length < 6 ?
        document.getElementById("h2").innerText = `This password is weak`
    
    : password.length >= 6 && password.length <= 10 ?
        document.getElementById("h2").innerText = `This password is medium`
    
    : password.length > 10 ? 
        document.getElementById("h2").innerText = `This password is strong` : ""
    
}
