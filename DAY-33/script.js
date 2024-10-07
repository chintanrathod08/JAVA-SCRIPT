let num = localStorage.getItem()

document.getElementById("add").addEventListener("click",()=>{
    num++
    localStorage.setItem("num",num)
    document.getElementById("count").innerText = num
})

document.getElementById("min").addEventListener("click",()=>{
    num--;
    localStorage.setItem("num",num)
    document.getElementById("count").innerText = num
})