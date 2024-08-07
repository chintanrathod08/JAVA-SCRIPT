// Determine the total bill amount including 12% tax, 18% tip, and a $25 service charge for a purchase of $500 with a $50 voucher.

var amount = 500, tax = 12 , tip = 18, service_charge = 25, voucher = 50 , total;

var a = (amount * tax) /100;
var b = (amount * tip) /100;

total = (amount + a + b + service_charge) - voucher;

console.log("Total bill amount is : ",total);