// STRING METHODS
// 1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

var firstName = prompt('Enter your first name : ');
var lastName = prompt('Enter our last name : ');
var fullName = firstName + ' ' + lastName;
alert('Welcome To This Webpage Dear ' + fullName);

// 2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser
var favoritePhone = prompt('enter your favourite phone model : ');
document.write('My favourite phone model is : ' + favoritePhone + '<br>');
document.write('Length of String is : '  + (favoritePhone.length) +  '<br>' + '<br>');

// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .

var mycountry = 'Pakistan';
document.write('String : ' + mycountry + '<br>');
document.write("Index of 'n' : " + mycountry.indexOf('n') + '<br>' + '<br>');

// 4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.

var greet = 'Hello World';
document.write('String : ' + greet + '<br>');
document.write("Last Index of 'l' : " + greet.lastIndexOf('l') + '<br>' + '<br>');


// 5. Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.


var pak = 'Pakistani';
document.write('String : ' + pak + '<br>');
document.write('Character at Index 3 is : ' + pak.charAt(3) + '<br>' + '<br>');


// 6. Repeat Q1 using string concat() method.


var firstName1 = prompt('Enter your first name : ');
var lastName1 = prompt('Enter our last name : ');
var fullName1 = firstName1.concat(lastName1);
alert('Welcome To This Webpage Dear ' + fullName1);


// 7. Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.


var city1 = 'Hyderabad';
document.write('City : '+city1 + '<br>');
city2 = city1.replace("Hyder","Islam");
document.write('After Replacement : '+city2 + '<br>' + '<br>');

// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and
// football together.”;


var message = 'Ali and Sami are best friends. They play cricket and football together.';
message = message.replace(/and/g,"&");
document.write(message + '<br>' + '<br>');

// 9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.


var string = '472';
document.write(string + '<br>');
document.write('String' + '<br>');
document.write(parseInt(string) + '<br>');
document.write('Number' + '<br>'  +'<br>');


// 10. Write a program that takes user input. Convert and
// show the input in capital letters.


var userInput = prompt('enter a word : ');
document.write('User Input : ' + userInput + '<br>');
var upperCase = userInput.toUpperCase()
document.write('Upper Case : ' + upperCase + '<br>' + '<br>');

// 11. Write a program that takes user input. Convert and
// show the input in title case.
                                                                


var input= prompt("enter...");
var res =  input.slice(0,1).toUpperCase()+input.slice(1,10); 
document.write("User input: ",input,"<br>");
document.write("Upper case: ",res);


// 12. Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.


var num = 35.36;
document.write('Number : ' + num + '<br>');
num = num.toString()
nmu = num.replace('.','')
document.write('Result : ' + nmu + '<br>' + '<br>');


// 13. Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .
// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64


var userName = prompt('Enter your username : ');
if(userName === '@' || userName === '!' ||userName === '.' ||userName === ',' ){
    alert('Please! enter a valid username');}
var userName = prompt('Enter your username : ');


// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:


var bakeryItem = ['cake','apple pie','cookie','chips','patties'];
var userChoice = prompt('Enter you wanna choose : ');
userChoice = userChoice.toLowerCase();
for(i=0;i<bakeryItem.length;i++){
    if(bakeryItem[i] === userChoice){
        document.write(userChoice + ' is available at index ' + bakeryItem.indexOf(userChoice) + ' in our bakery.' + '<br>' + '<br>');
    }
else{
        document.write('we are sorry ' + userChoice + 'is not available in our bakery!');
        break
    }
}

// 15. Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.
                                          

var password = prompt("enter your password");
document.write("entered password ", password, "<br>");

if (password.slice(0, 1) <= 1000000) {
    document.write("Password cannot start with the numbers ", "<br>");
    document.write("plz enter a valid password" + "<br>" + "<br>");
}
else if (password.length <= 6) {
    document.write("Password length cannot be equal to or less than 6 character ", "<br>");
    document.write("plz enter a valid password"+ "<br>" + "<br>");
}
for (var i=0; i < password.length; i++){
    switch(p){
        case "!" :
            document.write("Password should not contain special characters" + '<br>');
            document.write("plz enter a valid password"+ "<br>" + "<br>");
            break;

        case "@" :
            document.write("Password should not contain special characters" + '<br>');
            document.write("plz enter a valid password"+ "<br>" + "<br>");
            break;

        case "#" :
            document.write("Password should not contain special characters" + '<br>');
            document.write("plz enter a valid password"+ "<br>" + "<br>");
            break;

        case "$" :
            document.write("Password should not contain special characters" + '<br>');
            document.write("plz enter a valid password"+ "<br>" + "<br>");
            break;

        case "%" :
            document.write("Password should not contain special characters" + '<br>');
            document.write("plz enter a valid password"+ "<br>" + "<br>");
            break;

        case "^" :
            document.write("Password should not contain special characters" + '<br>');
            document.write("plz enter a valid password"+ "<br>" + "<br>");
            break;

        case "&" :
            document.write("Password should not contain special characters" + '<br>');
            document.write("plz enter a valid password"+ "<br>" + "<br>");
            break;

        case "*" :
            document.write("Password should not contain special characters" + '<br>');
            document.write("plz enter a valid password"+ "<br>" + "<br>");
            break;

        case "=" :
            document.write("Password should not contain special characters" + '<br>');
            document.write("plz enter a valid password"+ "<br>" + "<br>");
            break;

        case "+" :
            document.write("Password should not contain special characters" + '<br>');
            document.write("plz enter a valid password"+ "<br>" + "<br>");
            break;
    }
}

// 16. Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.


var university = 'University of Karachi';
university = university.split("");

for (i=0 ; i < university.length ; i++){
    document.write(university[i] + '<br>');
}


// 17. Write a program to display the last character of a user
// input.


var en$ = prompt('enter input character : ');
document.write('User Input : ' + en$ + '<br>');
document.write('Last Character of Input : ' + en$.substr(-1) + '<br>' + '<br>');


// 18. You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.


var sentence = 'The quick brown fox jumps over the lazy dog .';
document.write(sentence + '<br>');
sentence1 = sentence.toLowerCase();
y = (sentence1.match(/the/g)).length;
document.write('There are ' + y + ' occurences of word \'the\' .' + '<br>'  + '<br>');






