// Determine the total bill amount including 8% tax and a $20 service fee for a purchase of $250 with a $30 discount.

var amount = 250, tax = 8, service_fee = 20, discount = 30, total;

var a = (amount * tax) / 100;

total = (amount + a + service_fee) - discount;

console.log("Total bill amount is : ",total);



