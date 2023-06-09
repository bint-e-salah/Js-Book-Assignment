// IF…ELSE & ELSE IF STATEMENT,
// TESTING SET OF CONDITIONS

// 1. Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).
var ch = prompt("Enter any character ")

if (ch>=65 && ch<=90)
		alert("Character is a capital letter");
	else if (ch>=97 && ch<=122)
		alert("Character is a small letter");
	else if (ch>=48 && ch<=57)
		alert("Character is a digit");
	else if ((ch>0 && ch<=47)||(ch>=58 && ch<=64)||
               (ch>=91 && ch<=96)||(ch>=123 && ch<=127))
	alert("Character is a special symbol");
	
// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.
var a = +prompt("Enter an integer");
var b = +prompt("Enter an integer");
if(a > 0 && b > 0 && a > b){
    document.write("</br>" + "The larger number is" + a)
}
else if(a > 0 && b > 0 && a < b){
    document.write("</br>" + "The larger number is" + b)
}
else if(a === b && a > 0 && b > 0){
    document.write("</br>" + "Both numbers are equal!")
}
else {
    document.write( "</br>" +"please add an integer!")
}



// 3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.
var number = +prompt("Enter a number");
if(number > 0){
    document.write("</br>" + "The given number is positive ")
}
else if(number < 0){
    document.write("</br>" + "The given number is negative ")
}
else if(number === 0){
    document.write("</br>" + "The given number is zero ")
}
else {
    document.write("You did not enter any number")
}

// 4. Write a program that takes a character (i.e. string of
// length 1) and returns true if it is a vowel, false otherwise

var char = prompt("Enter any  string character of length 1");
if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
    alert("true")
}
else {
    alert("false")
}
// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.

var passWord = "a1b2c3d4e";
var userInput = prompt("Enter your password (should be alphaNumeric and length must be greaterthan 8 characters)");

if(userInput == ""){
    alert("Please enter your password")
}
    
else if(userInput === passWord){
    alert("Correct! The passwords you entered matches the original password")
}

else { 
    alert("Incorrect password")
}



// 6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }
var greeting;
var hour = 13;
if(hour < 18){
    greeting = "Good day";
    alert(greeting)
}
else {
    greeting = "Good evening";
    alert(greeting)
}
// 7. Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements

var time = +prompt("Please enter the time in 24 hours clock format like: 1900 = 7pm");
if(time >=0000 && time <1200){
    alert("Good Morning!")
}
else if(time >=1200 && time <1700){
    alert("Good Afternoon!")
}
else if(time >=1700 && time <2100){
    alert("Good Evening!")
}
if(time >=2100 && time <2359){
    alert("Good night!")
}
else {
    alert("Please enter the right formate of time")
}

