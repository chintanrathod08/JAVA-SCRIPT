// Determine the total bill amount including 10% tax and a $15 delivery fee for a purchase of $300 with a $50 discount.

var amount = 300, tax = 10, fee = 15, discount = 50;

var a = (amount * tax) /100;

var total = (amount + a + fee) - discount;

console.log("Total bill amount is : ",total);


