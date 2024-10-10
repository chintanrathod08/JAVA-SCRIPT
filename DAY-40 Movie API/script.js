let moviesName = document.getElementById("data")
let select = document.getElementById("optiopn")

let display = "";
if(moviesName.value == ""){
    display = "money"; 
} else {
    display = moviesName.value;
}

(function() {
    fetchData(display);
})();

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
        document.getElementById("moviePoster").innerHTML = view(Res.Search)
    })
    .catch((Err)=>{
        console.log(Err)
    })
}

function view(arr){
    return arr.map((el)=>{
        return `<div id="main">
        <div id="img2">  <img src="${el.Poster}"  id="post"> </div>
        <div id="details"> <center> <h4 id="h4">${el.Title}</h4> </center>
        
        </div>
        </div>`
    }).join(" ")
}