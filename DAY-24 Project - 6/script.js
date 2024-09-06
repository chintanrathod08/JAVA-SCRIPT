let arr = [
    
    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/homepage_5_vKR0TF5.jpg?format=webp&w=1500&dpr=1.3",
    
    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/homepage_banner_-_Copy_copy.jpg?format=webp&w=1500&dpr=1.3",

    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Men-Cargo-Offer_Homepage-Banner-copy.jpg?format=webp&w=1500&dpr=1.3",

    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/OVERSIZED_TSHIRT-_HOMEPAGE.jpg?format=webp&w=1500&dpr=1.3",

    // "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/homepage_2_8crLICw.jpg?format=webp&w=1500&dpr=1.3"
    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/homepage_banner_copy_0BT5EUk.jpg?format=webp&w=1500&dpr=1.3"
]   


let n = 0;

function Prev(){

    n++;
    
    if( n == arr.length){
        n=0
    }
   
    document.getElementById("slider").innerHTML =`<img src="${arr[n]}">`
        
}

function Next(){
    n--;

    if( n<0 ){
        n=arr.length-1;
    }

    document.getElementById("slider").innerHTML =`<img src="${arr[n]}">`
    
}
document.getElementById(Prev())
