do{
    fun()
}while(false)


function fun(){

    let arr = [
        {
            captcha : "6 o Y x 0 K"
        },
    
    
        {
            captcha : "A 7 E 4 r 3"
        },
    
    
        {
            captcha : "K 4 H p P V"
        },

        {
            captcha : "3 I H c Q z"
        }
    ]
    

    let add = Math.floor(Math.random()*arr.length)
    
    document.getElementById("data").innerHTML = `<center> <h5>${arr[add].captcha}</h5> </center>`
    document.getElementById("data").style = `color : white; padding-top : 10px`;

    

}
