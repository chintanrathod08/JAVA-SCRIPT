let timer;

document.querySelector("#start").addEventListener("click",()=>{
    timer = setInterval(()=>{
        let now = new Date();
        let hours = String(now.getHours()).padStart(2,"0");
        let minutes = String(now.getMinutes()).padStart(2,"0");
        let seconds = String(now.getSeconds()).padStart(2,"0");
        
        document.querySelector("#timer1").innerText = `${hours}`
        document.querySelector("#timer2").innerText = `${minutes}`
        document.querySelector("#timer3").innerText = `${seconds}`
    },1000)

})

document.querySelector("#stop").addEventListener("click",()=>{
    clearInterval(timer)
})  