function str(word){

    let ans = "";

    for (let x = word.length - 1; x >= 0; x-- ){
        ans = ans + word[x];
    } 

    console.log(ans);

    if ( ans == word ){
        console.log("is a Palindrome");
        
    }
    else{
        console.log("Not a Palindrome");
        
    }
    

}
str("racecar")