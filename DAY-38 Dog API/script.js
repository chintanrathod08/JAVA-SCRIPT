
function add(){

    fetch(`https://dog.ceo/api/breeds/image/random`)
    .then((c)=>{
        return c.json()
    })
    .then((res)=>{
        
        document.getElementById("data").innerHTML = `<img src="${res.message}" width="400px" heigth="400px" id="data1"/>`
       
    })
    .catch((Err)=>{
        console.log(Err);
    })


}

add()


