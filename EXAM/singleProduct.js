function Fetchdata(){

    fetch(`http://localhost:3000/Food`)
    .then((Res)=>{
        return Res.json()
    })
    .then((res)=>{
        document.getElementById("singlePro").innerHTML = viewData(res)
    })
    .catch((Err)=>{
        console.log(Err);
    })
}
Fetchdata()


function  removeData(id){

    fetch(`http://localhost:3000/Food/${id}`,{
        method : "DELETE",
    })
    .then((Res)=>{
        return Res.json()
    })
    .then((res)=>{
        document.getElementById("singlePro").innerHTML = viewData(res)
    })
    .catch((Err)=>{
        console.log(Err);
    })

}

removeData(id)


function viewData(arr){
    return arr.map((el)=>{
        return `<div id="card"> 
        
          <div id="IMG"> 
            <img src="${el.foodImg}" id="mainimg" />
          </div> 
            <br><br>

          <div id="DETAIL">
            <p>${el.foodTitle}</p>
            <p>${el.foodDis}</p>
          </div>

          <button id="edit">Edit Items</button> 
          <button id="delete" onclick="removeData(${el.id})"> Delete Items</button>
        
        </div>`
    }).join("")
}



