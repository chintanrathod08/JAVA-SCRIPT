
fetch(`https://imdb-top-100-movies.p.rapidapi.com/`,{
    method : 'GET',
    headers : {
        'content-type' : 'application/json',
        'x-rapidapi-key': '785873bde5msha56df10d55cc5c7p15e7b3jsnbbac9099769a',
		'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com'
    }
})
.then((res)=>{
    return res.json()
})
.then((res)=>{
    document.getElementById("Movie_Box").innerHTML = view(res)
})
.catch((err)=>{
    console.log(err);
    
})

function view(arr){
    return 
}