function rs(word){

    let ans = ""

    for( let x = word.length -1 ; x >=0; x--){
        ans += word[x]
    }
    console.log(ans);
    
}
rs("Hello")