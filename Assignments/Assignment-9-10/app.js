// USER INPUT & CONDITIONAL STATEMENT

// 1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”
var userInput = prompt("Enter the city name")
if(userInput === "Karachi"){
    alert("Welcome to the city of lights")
}
// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.
 var userGender = prompt("What is your gender?")
 if(userGender === "Male"){
    alert("Good Morning sir")
 }
 if(userGender === "Female") {
    alert("Good Morning Ma'am")
 }
// 3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:
// Signal color Message
// Red Must Stop
// Yellow Ready to move
// Green Move now
var TrafficSignalColor = prompt("Enter the colour of road traffic signal")
if(TrafficSignalColor === "Red"){
    alert("Must stop")
}
else if(TrafficSignalColor ==="Yellow"){
    alert("Ready to Move")
}
else if( TrafficSignalColor === "Green"){
    alert("Move now")
}
else{
    alert("No match found")
}
// 4. Write a program to take input remaining fuel in car (in
// litres) from user. If the current fuel is less than 0.25litres,
// show the message “Please refill the fuel in your car”
var remningFuel = prompt("Enter amount of remaining fuel in car in liters");
if(remningFuel < "0.25l"){
    alert("Please refill the fuel in your car")
}
// 5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.
// a. var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
var a = 4;
 if (++a === 5){
 alert("given condition for variable a is true");
 }
// b. var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
var b = 82;
 if (b++ === 83){
 alert("given condition for variable b is true");
}
// c. var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
var c = 12;
 if (c++ === 13){
 alert("condition 1 is true");
 }
 if (c === 13){
 alert("condition 2 is true");
 }
 if (++c < 14){
 alert("condition 3 is true");
 }
 if(c === 14){
 alert("condition 4 is true");
 }
// d. var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// e. if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }
 var materialCost = 20000;
 var laborCost = 2000;
 var totalCost = materialCost + laborCost;
 if (totalCost === laborCost + materialCost){
 alert("The cost equals");
 }
  if (true){
 alert("True");
 }
 if (false){
 alert("False");
}
// f. if("car" < "cat"){
// alert("car is smaller than cat");
// }

 if("car" < "cat"){
 alert("car is smaller than cat")
 }

// 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:
// Show the total marks, marks obtained, percentage, grade &
// remarks like:
var firstsubMarks = +prompt("Enter your marks of first subject");
var secSubMarks = +prompt("Enter your marks of second subject");
var thirdSubMarks = +prompt("Enter your marks of third subject");
var totalMarksObtained =firstsubMarks + secSubMarks + thirdSubMarks;
var totalMarks = 300;
var persentage = (totalMarksObtained/totalMarks)*100
if(persentage >= 80){
    alert("Excellent! A-one grade")
}
else if(persentage >= 70){
    alert("Good! A grade")
}
else if(persentage >= 60){
    alert("You need to improve! B Grade")
}
else if(persentage < 60){
    alert("Sorry! You are failed ")
}
document.write("</br>"+ "<h1>Marks Sheet</h1>" + "</br>" + "Total Marks:" + totalMarks + "</br>" + "Marks Obtained:" + totalMarksObtained + "</br>" + "Percentage:" + persentage + "</br>" + "Grade:" + "</br>" + "Remarks:")
// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.
var secretNum = 7;
var userNum = +prompt("Guess the secret number ranging from 1-10");
if(userNum === secretNum){
    alert("Bingo! Correct answer")
}
else if(userNum === secretNum+1){
    alert("close enough to the correct answer")
}
// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.
var userInput = +prompt("Enter a number that divisible by 3");
if(userInput % 3 == 0){
    alert("The number is Divisible by 3")
}
// 9. Write a program that checks whether the given input is an
// even number or an odd number.
var number = 44
if(number % 2 == 0){
    alert("The given number is even")
}
// 10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”
var tempInput = +prompt("Enter the current temperature");
if(tempInput > 40){
    alert("It is too hot outside.")
}
else if(tempInput > 30){
    alert("The weather today is normal.")
    }
    else if(tempInput > 20){
        alert("Today's weather is cool")
    }
    else{
        alert("OMG! Today's weather is so Cool.")
    }

// 11. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.
var number1 = +prompt("Enter first number");
var number2 = +prompt("Enter second number");
var operator = prompt("Enter operator (either +, -, *, / or % ) :");
var result;

if (operator == '+') {
    result = number1 + number2;
}
else if (operator == '-') {
    result = number1 - number2;
}
else if (operator == '*') {
    result = number1 * number2;
}
else if (operator == '/') {
    result = number1 / number2;
}

else if (operator == '%') {
    result = number1 % number2;
}
console.log(result);
Document.write(result)