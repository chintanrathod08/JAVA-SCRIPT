
document.getElementById("check").addEventListener("click",city)

 

function city(){


    var citytemp = document.getElementById("data").value 
    var cityname = ""

    if(citytemp == ""){
        cityname = "delhi" 
    }
    else{
        cityname = citytemp
    }

    
    

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=8daf6f78e415ecbda6eba40bef115e4f&units=metric`)
    .then((res)=>{
        return res.json()
    })
    .then((Res)=>{
        console.log(Res);
        
        document.getElementById("view").innerHTML = `
        
        <div class="weather"> 

        <h1 id="cityname"><i class="ri-map-pin-line"></i> City : <span>${Res.name}</span></h1> <hr id="sp">
        <div id="weatherimg"><img src="https://openweathermap.org/img/wn/${Res.weather[0].icon}@2x.png" width="200px height="200px"/> </div>
        <p id="wtemp"><i class="ri-temp-hot-line"></i> ${Res.main.temp} <i class="ri-celsius-fill"></i></p> <br>
        <p id="speed"> <i class="ri-windy-fill"></i> ${Res.wind.speed} Km/h</p> <br>
        <p id="descri"><i class="ri-mist-line"></i> ${Res.weather[0].description}</p> <br>
        </div>

        
        `
    })
    .catch((err)=>{
        console.log(err);
    })

}

city();


