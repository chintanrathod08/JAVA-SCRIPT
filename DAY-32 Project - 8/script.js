let timer;

document.querySelector("#start").addEventListener("click",()=>{
    timer = setInterval(()=>{
        let now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();
        
        document.querySelector("#timer1").innerText = `${hours}`
        document.querySelector("#timer2").innerText = `${minutes}`
        document.querySelector("#timer3").innerText = `${seconds}`
    },1000)

})

document.querySelector("#stop").addEventListener("click",()=>{
    clearInterval(timer)
})  