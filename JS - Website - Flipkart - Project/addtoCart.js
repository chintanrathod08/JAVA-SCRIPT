
fetch(`https://render-js-tix7.onrender.com/addcart`)
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

                <div id="cartimg"> 
                 <center>   <img id="image" src = "${el.imgURL}" width="150px" height="150px"/>
                 </center>
                 </div>


                

                <div id="adddeails">
                    <p id="addtitle">${el.title}</p>
                    <p id="addprice">₹ ${el.price}</p>
                    <p id="addrating">${el.rating}</p>

                     <button id="butt" onclick="remove(${el.id})">Delete</button>
                 
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