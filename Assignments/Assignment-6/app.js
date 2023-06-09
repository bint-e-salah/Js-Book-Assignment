// MATH EXPRESSIONS

// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:
var a = 10;
document.write("</br>" + "The value of a is:" + a)
var a =++a;
document.write("</br>" + "The value of ++a is :" + a)
document.write("</br>"+ "Now the value of a is:" + a)
var a = a++;
document.write("</br>" + "The value of a++ is :" + a++)
document.write("</br>" + "Now the value of a is:" + a)
var a = --a;
document.write("</br>" + "The value of --a is:" + a)
document.write("</br>" + "Now the value of a is:" + a)
var a = a--;
document.write("</br>" + "the value of a-- is:" + a--)
document.write("</br>" + "Now the value of a is" + a)

// 2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;
var a = 2;
var b = 1;
var result = --a - --b + ++b + b--;

document.write("</br>" + "a is:" + a )
document.write("</br>" + "b is:" + b )
document.write("</br>" + "Rsult is:" + result)


// 3. Write a program that takes input a name from user &
// greet the user
var userName = prompt("Enter Your Name")
alert("Hello!" + userName)
// 4.
// 5. Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.
var number = parseInt(prompt("Enter an integer: " , "5"));
for(var i = 1; i<= 10; i++){
    var result = i * number;
    document.write( "</br>"+  number + " " + "*" + " " + i + " " + "=" + " " + result)
}


// 6. Take
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)
var firstSubject = prompt("Enter first subject name");
var secondSubject = prompt("Enter second subject name");
var thirdSubject = +prompt("Enter third subject name");
var totalMarksEachsub = 100;
var firstsubMarks = +prompt("Enter your marks of first subject");
var secSubMarks = +prompt("Enter your marks of second subject");
var thirdSubMarks = +prompt("Enter your marks of third subject");
var totalMarksObtained =firstsubMarks + secSubMarks + thirdSubMarks;
var result = (totalMarksObtained/(totalMarksEachsub*3))*100
