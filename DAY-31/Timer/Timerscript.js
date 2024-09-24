
function start(){

    let a = document.querySelector("#data").value


    
        var Value = setInterval(() => {
           a--
            document.querySelector("#h1").innerText = a
            if (a <=0) {
                clearInterval(Value)
            }
            
    },1000);
}





