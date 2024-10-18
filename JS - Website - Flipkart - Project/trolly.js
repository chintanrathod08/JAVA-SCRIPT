fetch(`http://localhost:3000/addcart`)
    .then((res)=>{
        return res.json()
    })
    .then((Res)=>{
        console.log(Res.length);

        var cartlength = Res.length

        
        document.getElementById("cartnum").innerHTML = cartlength

        // document.querySelector("#additem").innerHTML = view(Res)
    })
    .catch((Err)=>{
        console.log(Err)
})
