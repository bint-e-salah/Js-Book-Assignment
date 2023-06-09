// MATH METHODS

// 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number


var num = +prompt('enter a +ve integar : ');
if( num > 0){
        document.write("Number : "+ num +"<br>");
        document.write("Round of value : "+ Math.round(num)  +"<br>");
        document.write("Floor value : "+ Math.floor(num) +"<br>");
        document.write("Ceil value : "+ Math.ceil(num) +"<br>" + "<br>");
}


// 2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number


var userNum = +prompt('enter a +ve integar : ');
if( userNum < 0){
        document.write("Number : "+ userNum +"<br>");
        document.write("Round of value : "+ Math.round(userNum)  +"<br>");
        document.write("Floor value : "+ Math.floor(userNum) +"<br>");
        document.write("Ceil value : "+ Math.ceil(userNum) +"<br>" + "<br>");
}


// 3. Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5


var num1 = +prompt('enter a number : ');
document.write('The absolute value of ' + num1 + ' is ' + Math.abs(num1) + '<br>' + '<br>' );


// 4. Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.:
 

var dice = Math.random() *6 ;
document.write("The random value of dice is : " + Math.ceil(dice) + '<br>' + '<br>');


// 5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser

var cv1$ = Math.random() * 2 ;
var cv2$ = Math.floor(cv1$)
document.write(cv2$ + '<br>');
if(cv2$ == '2'){
    document.write('random coin value :  HEADS' + '<br>' + '<br>'  );}
else if(cv2$ == '1'){
    document.write('random coin value :  TAILS' + '<br>' + '<br>'  );}

    

// 6. Write a program that shows a random number between 1
// and 100 in your browser.


var randomNum = Math.random()*100;
document.write("Random number between 1 and 100 : " + Math.ceil(randomNum) + '<br>' + '<br>');


// 7. Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms


var a = prompt('enter weight : '); 
if (a.substr(3) == "" || a.substr(3) == "kg" || a.substr(2) == "kg" || a.substr(5) == "kgs" || a.substr(4) == "kgs" || a.substr(5) == "kilograms" || a.substr(4) == "kilograms"){
    document.write("The weight of user is : " + a + '<br>');
}


// 8. Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.


var rsn$ = Math.random() * 10;
rsn$ = Math.floor(rsn$);
var userGuess = +prompt('enter your guess between 1 to 10 : ');

if ( userGuess === rsn$){
    alert('Congratulations , Right Guess!');
}
else{
    alert('Hard Luck try Next time !');
}
