// MATH EXPRESSIONS
// 1. Write a program that take two numbers & add them in a
// new variable. Show the result in your browser. 
var number1 = +prompt("Enter the first number ");
var number2 = +prompt("Enter the second number");
var sum = number1 + number2
document.write("</br>" + "sum of" + " " + number1 + " " + "and" + " " + number2 + " " + "is" + " " + sum + "</br>");

// 2. Repeat task1 for subtraction, multiplication, division &
// modulus.
var result = number1 - number2
var product = number1 * number2;
var quotient = number1 / number2;
var remainder = number1 % number2;

document.write( "Subtraction result of" + " " + number1 + " " + "and" + " " + number2 + " " + "is" + " " + result + "</br>");

document.write( "Product of" + " " + number1 + " " + "and" + " " + number2 + " " + "is" + " " + product + "</br>");

document.write( "Quotient of" + " " + number1 + " " + "and" + " " +  number2 + " " + "is" + " " + quotient + "</br>");

document.write("Modulus of" + " " + number1 + " " + "and" + " " +  number2 + " " + "is" + " " + remainder + "</br>");


// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value
// after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value
// by 3.
// l. Output : “The remainder is : 0”.

var num = 
document.write("Value after variable declaration is: ??" + "</br>");
 var num = +prompt("Enter a number");
 document.write("Initial value:" + num + "</br>")
 var num1 = num+1;
 document.write("Value after increment is: " + num1 + "</br>")
var newNum = num1 + 7;
document.write("value after addition is:"+ newNum + "</br>")
var num2 = --newNum;
document.write("Value after decrement is:" + num2 + "</br>")
var num3 = newNum % 3;
document.write("Output : “The remainder is :" + num3 + "</br>" )

// 4. Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// tickets
// to a movie. Example output:

var ticketPrice = 600;
var ticketQuantity = 5;
var totalTicketCost = ticketPrice * ticketQuantity
document.write("</br>" + "Total cost to buy 5 tickets to a movie is" + " "+ totalTicketCost + "PKR")  
// 5. Write a script to display multiplication table of any
// number in your browser. 

var number = parseInt(prompt("Enter an integer: "));
for(var i = 1; i<= 10; i++){
    var result = i * number;
    document.write( "</br>" + number +" " + "*" + " " + i + " " + "=" + "" + result)
}
// 6. The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.
// Conversion Formulae:
var  celsiusTemp = 35;
var fahrenheitConversion = (celsiusTemp*(9/5)) + 32;
document.write("</br>"+ celsiusTemp + "oC"+ " " + "is" + " " + fahrenheitConversion + "oF")
var  farenhitTemp = 70;
var celsiusConversion = (farenhitTemp - 32)*(5/9);
document.write("</br>"+ farenhitTemp + "oF" +" " + "is" + " " + celsiusConversion + "oC")

// 7. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.
 var item_1_Price = 650;
 var item_2_Price = 100;
 var item_1_OrderedQuntity =3;
 var item_2_OrderedQuntity = 7;
 var shippingCharges = 100;
 var totalCost = (item_1_Price *item_1_OrderedQuntity) + (item_2_Price*item_2_OrderedQuntity)+ shippingCharges;
 document.write("</br>" + "</br>" + "<h1>SHOPPING CART</h1>")
 document.write("</br>" + "</br>" +"Price of item 1 is" + " " + item_1_Price + " "+ "RS")
 document.write("</br>" + "Quantity of item 1 is" +  " " + item_1_OrderedQuntity)
 document.write("</br>" + "Price of item 2 is" + " " + item_2_Price + " " + "RS")
 document.write("</br>" + "Quantity of item 2 is"+ " " + item_2_OrderedQuntity)
 document.write("</br>" +  "Shipping charges" + " " + shippingCharges + " " +"RS")
 document.write("</br>" + "</br>" +  "Total cost of your order is" + totalCost + " " + "RS")

 // 8. Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser

var totalMarks = 500;
var marksobtained = 440;
var percentage =(marksobtained/totalMarks) * 100;
document.write("</br>"+ "</br>" + "<h1>Marks Sheet</h1>")
document.write("</br>" + "</br>"  + "Total Marks :" + " " + totalMarks)
document.write("</br>" + "Marks obtained :" + " "  + marksobtained)
document.write("</br>" + "Percentage :" + "  " + percentage)

// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)

var pakistaniRupee = (10*104.80) + (25 * 28);
document.write("</br>" + "</br>" +  "<h1>currency in PKR</h1>")
document.write( "</br>" + "</br>" +"Total currency in PKR :" + " " + pakistaniRupee)

// 10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression
var number = ((4+5) * 10)/2;
console.log(number)

// 11. The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.
// Output them to the screen like so: “They are either NN or NN
// years old”.

var currentYear =2023;
var birthYear = 2012;
var age = currentYear - birthYear
document.write("</br>" + "<h1> Age Calculator </h1>")
document.write("</br>" + "</br>" + "Current Year :" + currentYear)
document.write("</br>" + " Birth Year :" + birthYear)
document.write("</br>" + " Your Age is :" + age)

// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
var circleRadius = 20;
var circleCircumference =2 * 3.142 * 20;
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)
var circleArea = 3.142 * (20*20) 
document.write("</br>" + "<h1>The Geometrizer</h1>")
document.write("</br>" +  "<b>Radius of circle :</b>" + circleRadius)
document.write("</br>" + "<b>The circle circumference is:</b>" + circleCircumference)
document.write("</br>" + "<b>The area is :</b>" + circleArea)
// 13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need
// NNNN to last you until the ripe old age of NN”.

var favSnack = "kurkuray";
var currentAge = 30;
var maxAge =60;
var snackAmountPerDay = 4;
var totalsnackforRestOfLife = ((60-30)*365)*4;
document.write("</br>" + "<h1>The Life Time Supply Calculator</h1>")
document.write("</br>" + "<b>Favourite snack :</b>" + favSnack)
document.write("</br>" + "<b>Current age:</b>" + currentAge)
document.write("</br>" + "<b>Estimated Maximum Age:</b>" + maxAge)
document.write("</br>" + "<b>Amount of snacks per day:</b>" + snackAmountPerDay)
document.write("</br>" + "<b>You will need</b>" + " " + totalsnackforRestOfLife + "" + "<b>Kurkuray to last you until the ripe old age of 65")

