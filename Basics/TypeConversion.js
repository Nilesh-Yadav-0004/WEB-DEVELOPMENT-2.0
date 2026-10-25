/* TASK for TypeConversion*/

// "50" ko number mein convert karo aur 10 add karo.
// 100 ko string mein convert karo aur " rupees" add karo.
// Boolean(0) aur Boolean(1) ka output print karo 

// let age ="50";
// let convertedValue = Number(value);

// console.log(convertedValue + 10);
// console.log(typeof convertedValue);

/* Task for TypeConversion */

// 1. Basic conversion wala
// (Q) Convert the string into the number and add 25 in it.
// let price = "75";
// let convertedValue =  Number(price);

// console.log(convertedValue + 25);
// console.log(typeof convertedValue);

// 2 String conversion wala

// let num = 500;
// let convertedValue = String(num);

// console.log(convertedValue + "rupees");
// console.log(typeof convertedValue);

/* Important points */

// String(num) → variable ki value ko string mein convert karta hai.
// String(Number) → Number function ko string mein convert karta hai.
// String(500) → "500" return karta hai.

// (Q) Boolean  
// Boolean(0), Boolean(1), Boolean("") aur Boolean("Hello") ke outputs print karo.

// Task 3: Boolean Conversion

// let num1 = 0;
// let num2 = 1;
// let text1 = "";
// let text2 = "Hello";

// let result1 = Boolean(num1);
// let result2 = Boolean(num2);
// let result3 = Boolean(text1);
// let result4 = Boolean(text2);

// console.log(result1);
// console.log(result2);
// console.log(result3);
// console.log(result4);


// 4 Type Coercion

// let a = "10";
// let b = 5;

// let result1 = a + b;
// let result2 = a - b;
// let result3 = a * b;

// console.log(result1);
// console.log(result2);
// console.log(result3);

// console.log(typeof result1);
// console.log(typeof result2);
// console.log(typeof result3);

// 5 NaN

// let value = "abc";
// let convertedValue = Number(value);

// console.log(convertedValue);
// console.log(typeof convertedValue);
// console.log(Number.isNaN(convertedValue));

// 6 ParseInt() vs Number()

// let decimalValue = "45.8";

// let result1 = parseInt(decimalValue);
// let result2 = Number(decimalValue);

// console.log(result1);
// console.log(result2);

// console.log(typeof result1);
// console.log(typeof result2);

// 7 Real-World bill 

// let productPrice = "999";
// let deliveryCharge = 50;

// let convertedPrice = Number(productPrice);
// let totalBill = convertedValue + deliveryCharge;

// console.log("product Price:", productPrice);
// console.log("Delivery Charge:", deliveryCharge);
// console.log("Totalbill:", totalBill);
// console.log("Data Type:", typeof totalBill);