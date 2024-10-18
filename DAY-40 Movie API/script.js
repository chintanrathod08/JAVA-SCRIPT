let moviesName = document.getElementById("data")
let select = document.getElementById("optiopn")
let display = "";


if(moviesName.value == ""){
    display = "marvel"; 
} else {
    display = moviesName.value;
}

// (function() {
//     fetchData(display);
// })();

fetchData(display)




moviesName.addEventListener("input",()=>{
    if(moviesName.value){
        fetchData(moviesName.value)
    }
    
})

select.addEventListener("change",()=>{
    if(select.value){
        fetchData(moviesName.value,select.value)
    }
})


    function fetchData(movie,option="movie"){
        
    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=74113840&s=${movie}&type=${option}`)
    .then((res)=>{
        return res.json()
    })
    .then((Res)=>{
        console.log(Res)
        if(Res.Response == 'False'){
        document.getElementById("moviePoster").innerHTML = `<h1 id="wrong">😓 Opps! Somthing Wants Wrong ? <br> &nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span> This Data Is Not Found </span><h1>
                                                                        
        `
    }else{
        document.getElementById("container").innerHTML = view(Res.Search)
    }
    })
    .catch((Err)=>{
        console.log(Err)
    })
}

function view(arr){
    return arr.map((el)=>{
        return `
        <div id="main">
        <div id="img2">  <img src="${el.Poster}"  id="post"> </div>
        <div id="details"> <h4 id="h4">${el.Title}</h4> 
        <p>Yaer : ${el.Year} </p>
         <p>Type : ${el.Type} </p>
        </div>
        </div>`
    }).join(" ")
}