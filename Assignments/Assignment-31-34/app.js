// DATE METHODS


// 1. Write a program that displays current date and time in
// your browser.


var dAt = new Date();
document.write(dAt + '<br>' + '<br>');


// 2. Write a program that alerts the current month in words.
// For example December.


var d = new Date();
var Mat = d.getMonth();
document.write('Current Month : '+Mat + '<br>' + '<br>');


// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.


var d = new Date();
var Day = d.toString();
Day1 = Day.slice(0,3) ;
document.write('Today is '+ Day1+ '<br>' + '<br>');
 
// 4. Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.


var d = new Date();
var Day = d.toString();
Day1 = Day.slice(0,3);

if ( Day1 === 'Saturday' || Day1 === 'Sunday'){
    document.write('It\'s Funday!'+ '<br>' + '<br>');
    
}


// 5. Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.


var d = new Date();
var dayOfMonth = d.getDate();
// document.write(d)

if ( dayOfMonth < 16){
        document.write('First Fifteen Days of month'+ '<br>' + '<br>');    
}
else{
        document.write('Last days of month'+ '<br>' + '<br>');
}

// 6. Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.


var d = new Date();
document.write('Current Date : '+ d + '<br>');
var millsSince = d.getTime();
document.write('elapsed millisecods since January 1 , 1970  : '+ millsSince + '<br>');
var min = millsSince / 1000 * 60 ;
document.write('elapsed minutes since January 1 , 1970  : '+ millsSince + '<br>' + '<br>');

// 7. Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.


var d = new Date();
var currentHrs = d.getHours();
if ( currentHrs > 12 ){
    document.write('It\'s AM' + '<br>' + '<br>');
}
else{
    document.write('It\'s AM' + '<br>' + '<br>');
}

// 8. Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.


var w = new Date("Dec 31,2020");
var o = w.getTime();
document.write("Last Date : " + o + '<br>' + '<br>');

// 9. Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015


var a$$ = new Date("Jun 18,2015");
var b$$ = a$$.getTime();
var c$$ = new Date();
var d$$ = c$$.getTime();
var e$$ = d$$ - b$$;
var f$$ = Math.floor(e$$/(1000*60*60*24));
document.write(f$$ + " days have passed away since1st Ramadan , 2015" + "<br>" + "<br>");

// 10. Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.


var a$$$ = new Date(prompt("enter the refrence date : "));
var b$$$ = a$$$.getTime();
var c$$$ = new Date("Jan 1,2015");
var d$$$ = c$$$.getTime();
var e$$$ = b$$$ - d$$$ ;
var f$$$ = Math.floor(e$$$/(1000*60));
document.write("On refrence Date " + a$$$ +" now " + f$$$ + " seconds had passed since begining of 2015 " + "<br>" + "<br>");

// 11. Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.


var a$$$$ = new Date();
var d$$$$ = a$$$$.getHours();
var f$$$$ = d$$$$-1;
var c$$$$ = new Date();
var b$$$$ = c$$$$.setHours(f$$$$);

document.write("Current Date : "+a$$$$+"<br>");
document.write("1 hour before it was : "+c$$$$+"<br>"+"<br>");

// 12. Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?


var a7 = new Date();
var d7 = a7.getFullYear();
var f7 = d7-100;
var c7 = new Date();
var b7 = c7.setFullYear(f7);

document.write("Current Date : "+a7+"<br>"+"<br>");
alert("100 years back,it was : " + c7);

// 13. Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.


var a4 = new Date(prompt("enter date of birth : "));
var k4 = a4.toString();
var l4 = k4.slice(11,15);
var b4 = a4.getTime();
var c4 = new Date();
var d4 = c4.getTime();
var e4 = d4 - b4;
var f4 = Math.floor(e4/(1000*60*60*12*24*30));
document.write("Your age is : " + f4 + "<br>");
document.write("your birth year is : " + l4 + "<br>" + "<br>" );

// 14. Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,
// Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge



var hb = new Date();
var hc = hb.toString();
var ha = hc.slice(4,8);
var hn = prompt("enter your name");
var hu = +prompt("enter number of units");
var hf = hu*16;

document.write("<p style='font-size: 24px;'> K - ELECTRIC BILL</p>");
document.write("Customer Name : "+hn+"<br>");
document.write("Current Month : "+ha+"<br>");
document.write("Number of units charge : "+hu+"<br>");
document.write("Charge per unit : 16"+"<br>"+"<br>");
document.write("Net Amount Payable (with due date) : "+hf+"<br>");
document.write("Last Payable surcharge : 350"+"<br>");
document.write("Gross Amount Payable(After due date) : ", + (hf+350) + "<br>");
