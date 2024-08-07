// Calculate the total bill amount including 25% tax, 15% tip, and a $20 service charge for a purchase of $200.

var amount = 200, service_charge = 20 , tip = 15, tax = 25 , a;

var tip =  (amount * tip) /100;
var tax =  (amount * tax) /100;
 
a = amount + service_charge + tip + tax;

console.log("Total bill amount is : ",a);