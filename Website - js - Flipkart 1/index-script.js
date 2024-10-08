let arr = [

'Assets/slider-1 (8).jpg',
  'Assets/slider-1 (1).jpeg',
  'Assets/slider-1 (2).jpeg',
  'Assets/slider-1 (3).jpeg',
  'Assets/slider-1 (4).jpg',
  'Assets/slider-1 (5).jpg',
  'Assets/slider-1 (6).jpg',
  'Assets/slider-1 (7).jpg'
]   
     
    


let x = 0;

function Prev(){
    
    

    setInterval(()=>{


        
        if( x == arr.length){
            x = 0
        }

        x++;
       
        document.getElementById("slider").innerHTML = `<img src ="${arr[x]}" heigth = "600px" width = "100%";>`
    
    },2000)

    
}

function Next(){

    setInterval(()=>{
        
        
        
        if(x < 0){
            x = arr.length-1;
        }
         
        x--

        document.getElementById("slider").innerHTML = `<img src ="${arr[x]}" heigth = "600px" width = "100%";>`
        
    },2000)
}

document.getElementById(Next()) 




     
   
     




