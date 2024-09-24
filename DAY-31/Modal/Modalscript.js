
setTimeout(()=>{

    document.querySelector("#modalBox").style.opacity = "100%"

},2000)

document.querySelector("#close").addEventListener("click",(()=>{
    document.querySelector("#modalBox").style.opacity = "0%"
}))