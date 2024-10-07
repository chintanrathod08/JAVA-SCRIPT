document.getElementById("add").addEventListener("click",()=>{

    fetch(`https://dog.ceo/api/breeds/image/random`)
    .then((Res)=>{
        return Res.json()
    })
    .then((res)=>{
        
        document.getElementById("data").innerHTML = view(res)
       
    })
    .catch((Err)=>{
        console.log(Err);
    })

})

function view(arr){
        
   return  `<img src="${arr.message}" width="400px" heigth="400px" id="data1"/>`
       
}

