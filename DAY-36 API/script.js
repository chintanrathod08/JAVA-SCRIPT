fetch('https://fakestoreapi.com/products').then((r)=>{
    return r.json()
}).then((res)=>{
  document.getElementById("Products").innerHTML = view(res)
}).catch((err)=>{
    console.log(err)
})



function view(arr){
    return arr.map((Ele)=>{
        return `<div id="Cards"> 

        <div id="proimg">
             <img src="${Ele.image}" alt="${Ele.title}"  width="100%" height="300px"/>
         </div>

        <br>

         <div>
           <center> <h2>${Ele.category}</h2> <br>
            <h4>$${Ele.price}</h4> </center>
        </div>

        </div>`
    }).join("")
}