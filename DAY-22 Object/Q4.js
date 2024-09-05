// Iterate over the cars array and log the brand and model of each car.

let cars = [ { "brand": "Toyota", "model": "Corolla", "year": 2022 }, 
             { "brand": "Honda", "model": "Civic", "year": 2021 },
             { "brand": "Ford", "model": "Fusion", "year": 2020 }]

    cars.forEach((element)=>{

        let ans = "Brand : " + element.brand + " ," + " Model : " + element.model 

        console.log(ans);
        
    })    
