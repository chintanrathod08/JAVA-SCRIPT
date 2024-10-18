fetch(`http://localhost:3000/product`)
.then((res)=>{
    return res.json()
})
.then((Res)=>{
    document.getElementById("pro-sec-1").innerHTML = proview(Res)
})
.catch((Err)=>{
    console.log(Err);
})

function proview(arr){
    return arr.map((el)=>{
        return `<a href="singleProduct.html?id=${el.id}"> <div id="pro-card-1">  

        <div id="cardimg"> 
             <img src="${el.imgURL}" id="cardpro"/> 
        </div>
        

        <div id="proinfo"> 
            <p id="protitle">${el.title}</p><br>

            <p id="proprice">₹${el.price}</p>
            <p>Bank Offer </p> 
            <p id="prorate">${el.rating}</p>
            
             <button class="addbtn"><i class="ri-shopping-cart-2-line"></i> Add to Cart </<button> 

         </div>

        </div> </a>`
    }).join("")
}