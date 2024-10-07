let product = JSON.parse(localStorage.getItem("alldata")) || [] 

var valid = true 

document.querySelector("#productForm").addEventListener("submit",(ell)=>{
    ell.preventDefault()

    let obj = {
        title : document.getElementById("proTitle").value,
        price : document.getElementById("proPrice").value,
        imgUrl : document.getElementById("imageUrl").value,
    }

    if(obj.title == ""){
        alert("Please enter product name")
        valid = false
    }    
    else if(obj.price == ""){
        alert("Please enter product price")
        valid = false
    }
    else if(obj.imgUrl == ""){
        alert("Please enter an image URL")
        valid = false
    }
   
    if(valid == true){
        product.push(obj)
    }

    localStorage.setItem("alldata",JSON.stringify(product))
    
    document.getElementById("proTitle").value = ""
    document.getElementById("proPrice").value = ""
    document.getElementById("imageUrl").value = ""

    document.getElementById("Card").innerHTML = add()
})

function add(){



    return product.map((el)=>{
        return `<div id="sec1"> 

        <div>
            <img src ="${el.imgUrl}" width="400px"/> 
        </div>

        <div>
           <center> <h4>${el.title}</h4>    
             <p>${el.price}</p></center>
        </div>

        </div>`
    }).join("")
}

document.getElementById("Card").innerHTML = add()