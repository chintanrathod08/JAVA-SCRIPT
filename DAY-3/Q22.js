// Determine the total bill amount including a 20% tip and 10% tax for a meal costing $100.

let amount = 100, tip = 20, tax = 10;

let total = amount + (amount * tip)/100;
let cost = total + (total * tax)/100;

console.log("Total bill amount is : ",cost);