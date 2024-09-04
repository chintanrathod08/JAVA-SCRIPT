// You have an array of objects representing products with properties name and price. Write a function to find the index of the first product that costs more than $50. Use the findIndex method.

let arr = [{name: 'Shirt', price: 30}, {name: 'Shoes', price: 60}, {name: 'Hat', price: 25}]

let cost = arr.findIndex((ele,index)=>{

    if(ele>50){
        return ele
    }

})
console.log(cost);

