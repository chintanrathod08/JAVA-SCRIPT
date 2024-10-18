document.getElementById("data").addEventListener("click",()=>{

    var Proimg = document.getElementById("img").value
    var Protitle = document.getElementById("title").value
    var Prodis = document.getElementById("dis").value
    var IId = document.getElementById("id").value
    
    var valid = true 

    if(Proimg.length == 0){
        alert("Please enter Food Details..!!")
        valid = false
    }

   else if(Protitle == 0){
        alert("Please enter Food Details..!!")
        valid = false
    }

    else if(Prodis == 0){
        alert("Please enter Food Details..!!")
        valid = false
    }

    else if(IId == 0){
        alert("Please enter Food Details..!!")
        valid = false
    }

    var obj = {

        foodImg : Proimg,
        foodTitle : Protitle,
        foodDis : Prodis,
        id : IId 
    }

    



    if(valid == true){
        fetch(`http://localhost:3000/Food`,{
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(obj)
        })
        .then((Res)=>{
            return Res.json()
        })
        .then((res)=>{
            console.log(res);
            
        })
        .catch((Err)=>{
            console.log(Err);
        })
    
    }


    
})