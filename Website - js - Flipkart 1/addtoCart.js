
fetch(`http://localhost:3000/addcart`)
    .then((res)=>{
        return res.json()
    })
    .then((Res)=>{
        console.log(Res);
        
        document.querySelector("#additem").innerHTML = view(Res)
    })
    .catch((Err)=>{
        console.log(Err)
    })


    function view(arr){

return arr.map((el)=>{
    return `<div id="card">
                <div>
                 <center>   <img id="image" src = "${el.imgURL}"/>
                 </center>
                </div>
                <div>
                    <p id="title">${el.title}</p>
                    <p id="price">₹ ${el.price}</p>
                    <p id="title1">${el.rating}</p>

                     <button id="butt">Delete</button>
                 
                </div>
                
            </div>`
}).join("")

}

function remove(id){
    fetch(`http://localhost:3000/addcart/${id}`,{
        method : "DELETE",
    })
    .then((res)=>{
        return res.json();
    })
}