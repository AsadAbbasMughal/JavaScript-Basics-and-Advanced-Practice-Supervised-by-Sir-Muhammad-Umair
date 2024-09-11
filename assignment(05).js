   //   MATH EXPRESSIONS
   // Assignment # 5 JAVASCRIPT
   // *---------------------**---------------------*
// Qno: 01
//1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.
//    var a= 5;
//    var b= 6;
//    var sum = a  + b;
//    console.log("Sum of " + a + " and " + b + " is " + sum);



// Qno: 02
//2. Repeat task1 for subtraction, multiplication, division & modulus.
// var a= 5;
//  var b= 6;
//  var sum = a  * b;
// console.log("Multiplication of " + a + " and " + b + " is " + sum);

// var a= 5;
//  var b= 6;
//  var sum = a  - b;
// console.log("Subtract of " + a + " and " + b + " is " + sum);

// var a= 5;
//  var b= 6;
//  var sum = a  / b;
// console.log(" Divison of " + a + " and " + b + " is " + sum);

// var a= 5;
//  var b= 6;
//  var sum = a  % b;
// console.log("Modulus of " + a + " and " + b + " is " + sum);





// Qno: 03
  
   let myVariable;

   alert("Value after variable declaration is: " + myVariable);

   myVariable = 5;

   alert("Initial value: " + myVariable);

   myVariable++;

   alert("Value after increment is: " + myVariable);

   myVariable += 7;

   alert("Value after addition is: " + myVariable);

   myVariable--;

   alert("Value after decrement is: " + myVariable);


   let remainder = myVariable % 3;
   alert("Remainder after dividing is " + remainder);





   // Qno: 04
//4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. Example output:

// var costTicket = 600;
// var buying = 5;
// var calculate = costTicket * buying;
// console.log(calculate);





// Qno: 05
// 5. Write a script to display multiplication table of any number in your browser. E.g

// for(var a = 1; a<=10; a++){
//     console.log("4 * " + a + " =" + a*4);
// }






// Qno: 06
let celsius = 25;

let fahrenheit = (celsius * 9/5) + 32;

alert(celsius + "°C is " + fahrenheit + "°F");

let fahrenheitTemp = 77; 
let celsiusConverted = (fahrenheitTemp - 32) * 5/9;

alert(fahrenheitTemp + "°F is " + celsiusConverted.toFixed(2) + "°C");   







// Qno: 07
//7. Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables
  
//   var priceOfItem1 = 650.00;  Example price in dollars


//   var priceOfItem2 = 100.00;  Example price in dollars

  
//   var quantityOfItem1 = 3;   Example quantity


//   var quantityOfItem2 = 7;  Example quantity


//  var shippingCharges = 100.00;  Example shipping charges in dollars

 
//   var totalCostItem1 = priceOfItem1 * quantityOfItem1;
//   var totalCostItem2 = priceOfItem2 * quantityOfItem2;
//   var totalCost = totalCostItem1 + totalCostItem2 + shippingCharges;

  
//   alert("Price of item 1: $" + priceOfItem1);
//   alert("Price of item 2: $" + priceOfItem2);
//   alert("Ordered quantity of item 1: " + quantityOfItem1);
//   alert("Ordered quantity of item 2: " + quantityOfItem2);
//   alert("Shipping charges: $" + shippingCharges);
//   alert("Total cost: $" + totalCost.toFixed(2));









// Qno: 08
//8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser
 // Store total marks and marks obtained by the student
var totalMarks = 980; 
var marksObtained = 804; 

var percentage = (marksObtained / totalMarks) * 100;

 alert("Percentage: " + percentage.toFixed(2) + "%");






 
// Qno: 09
//9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression. (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)

 var usdToPkrRate = 104.80; 
 var sarToPkrRate = 28;    

 var amountUSD = 10;
 var amountSAR = 25;

 var totalPKR = (amountUSD * usdToPkrRate) + (amountSAR * sarToPkrRate);

 alert("Total in Pakistani Rupees: " + totalPKR.toFixed(2));







// Qno: 10
 //10. Write a program to initialize a variable with some number and do arithmetic in following sequence: a. Add 5 b. Multiply by 10 c. Divide the result by 2 Perform all calculations in a single expression
 var initialNumber = 7; // Example number

        var result = ((initialNumber + 5) * 10) / 2;

        alert("Result of the arithmetic operations: " + result);






//Qno : 11
//11. The Age Calculator: Forgot how old someone is? Calculate it! a. Store the current year in a variable. b. Store their birth year in a variable. c. Calculate their 2 possible ages based on the stored values.

var currentYear =2024

 var birthYear = 2004; 

 var ageThisYear = currentYear - birthYear;
 var  ageLastYear = ageThisYear - 1;


 alert("Possible age this year: " + ageThisYear);
 alert("Possible age last year: " + ageLastYear);








//Qno : 12
  var radius = 20; 

  var pi = 3.142;

  var circumference = 2 * pi * radius;

  var area = pi * radius * radius;

  alert("The circumference is " + circumference.toFixed(2));
  alert("The area is " + area.toFixed(2));






  //Qno : 13

 
   var favoriteSnack = "Chocolate Bars"; 

  var currentAge = 20;

   var maxAge = 80; 

   var amountPerDay = 2; 

   var yearsLeft = maxAge - currentAge; 
   vartotalAmount = yearsLeft * 365 * amountPerDay; 

   // Output the result
   alert("You will need " + totalAmount + " " + favoriteSnack + "s to last you until the ripe old age of " + maxAge + ".");






