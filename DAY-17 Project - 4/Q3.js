// 3. Write a function that counts the number of consonants in a given string.


function fun(world){

    let str = "";

   let count = 0
    
    for(let x = world.length - 1 ; x >= 0; x--){
        str += world[x];
       
        if(world[x] == "a" || world[x] == "e" || world[x] == "i" || world[x] == "o" || world[x] == "u"){

        }
        else{
            count++
        }
    }

    return count;

}
console.log(fun("chintan"));

