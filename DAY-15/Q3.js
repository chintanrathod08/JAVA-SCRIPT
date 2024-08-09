function str(c){

    let ans = "";

    for (let x = c.length - 1 ; x >= 0 ; x-- ){
        ans = ans + c[x];
    }

    console.log(ans);
    
}
str("Hello");
