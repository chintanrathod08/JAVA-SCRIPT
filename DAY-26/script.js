class car{
   
    constructor (brand,model,year,color){
        this.brand = brand,
        this.model = model,
        this.year = year,
        this.color = color
    }

    getCarInfo(){
        console.log(`This car brand is ${this.brand} - it's name ${this.model} - it's model year is ${this.year} - and it has ${this.color} color`);
        
    }

    getCarAge(currentYear){o
        console.log(`${currentYear - this.year} Year's old`);
        
    }

}

let car1 = new car("Toyota", "Camry", 2015, "Black");
let car2 = new car("Honda", "Civic", 2018, "White"); 
let car3 = new car("Tesla", "Model S", 2020, "Red"); 

car1.getCarInfo()
car1.getCarAge(2024)

car2.getCarInfo()
car2.getCarAge(2024)

car3.getCarInfo()
car3.getCarAge(2024)

