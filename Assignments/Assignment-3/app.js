// VARIABLES FOR NUMBERS

// 1. Declare a variable called age & assign to it your age. Show
// your age in an alert box.
var age = 34;
alert("I am" + " " + age + " " + "years old")

// 2. Declare & initialize a variable to keep track of how many
// times a visitor has visited a web page. Show his/her
// number of visits on your web page. For example: “You
// have visited this site N times”.

var numberOfVisits = 14;
document.write("You have visited this site" +"" + numberOfVisits +""+ "times")
// 3. Declare a variable called birthYear & assign to it your
// birth year. Show the following message in your browser:


var birthYear = 1986;
document.write("</br>" +"My birth year is" + "" + birthYear + "</br>" + "Data type of my decleared variabe is number")

// 4. A visitor visits an online clothing store
// www.xyzClothing.com . Write a script to store in variables
// the following information:
// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to
// order
// Show the following message in your browser: “John
// Doe ordered 5 T-shirt(s) on XYZ Clothing store”.
// VARIABLES FOR NUMBERS | JAVASCRIPT

var visitorName = prompt("Customer Name");
var productTitle = prompt("Product");
var quantity = +Prompt("Quantity");
document.write(visitorName + "ordered" + quantity + productTitle + ""+ "on XYZ clothing store") 
// -- END --