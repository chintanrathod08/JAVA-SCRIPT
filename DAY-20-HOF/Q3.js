// You have an array of strings representing names. Write a function to find the index of the first name that starts with the letter 'A'. If no such name exists, return -1. Use the findIndex method.

let arr = ['John', 'Alice', 'Bob', 'Amanda'];

for(let n = 0; n <arr.length; n++){

    if(arr[n].includes('A')){

        let ans = arr.indexOf(arr[n])

        console.log(ans);
        break;
    }

}