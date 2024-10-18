
fetch(`http://localhost:3000/addcart`)
    .then((res)=>{
        return res.json()
    })
    .then((Res)=>{
        console.log(Res.length);

        var cartlength = Res.length

        document.getElementById("cartnum").innerHTML = cartlength

        document.querySelector("#additem").innerHTML = view(Res)
    })
    .catch((Err)=>{
        console.log(Err)
})


function view(arr){
   return arr.map((el)=>{
    return `<div id="card">

            <div id="cartimg"> 
                 <center><img id="image" src = "${el.imgURL}" width="150px" height="150px"/></center>
            </div>


                <div id="adddeails">
                    <p id="addtitle">${el.title}</p>
                    <p id="addprice">₹ ${el.price * el.quantity}</p>
                    <p id="addrating">${el.rating}</p>

                    <button id="butt" onclick="remove(${el.id})"><i class="ri-delete-bin-6-line"></i> Delete</button>
                    <br><br>

                    <button id="pluse" onclick="EditData(${el.id},${el.quantity},'dec')">-</button>
                    <input value="${el.quantity}" id="int">  
                    <button id="pluse" onclick="EditData(${el.id},${el.quantity},'inc')">+</button> 

                    </div> 
                </div>`
}).join("")
}



function EditData(id, quantity, clickbtn) {
    var a = quantity;
    
    if (clickbtn == 'inc') {
        a = a + 1;
    } else if (clickbtn == 'dec') {
        a = a - 1;
        if(a < 1 ){
            document.getElementById("int").setAttribute("disabled") 
        }
    } 

    fetch(`http://localhost:3000/addcart/${id}`, {
        method: "PATCH",
        headers : {
            'Content-Type' : "application/json"
        },
        body: JSON.stringify({quantity : a})
    }).then((res) => {
        return res.json()
    })
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })

}

//------------------//

function remove(id){
    fetch(`http://localhost:3000/addcart/${id}`,{
        method : "DELETE",
    })
    .then((res)=>{
        return res.json();
    })
    .then((Res)=>{
        document.querySelector("#additem").innerHTML = view(Res)
    })
    .catch((Err)=>{
        console.log(Err)
    })

}