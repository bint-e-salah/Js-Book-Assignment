// FUNCTIONS, SWITCH
// STATEMENTS, WHILE… DOWHILE ,LOOPS


// 1. Write a custom function power ( a, b ), to calculate the value of
// a raised to b.


var a = +prompt("Enter the base : ");
var b = +prompt("Enter the power : ");

function power(a,b)
{
    return a**b;
}
p = power(a,b);
alert(p);

// 2. Any year is entered through the keyboard. Write a function to
// determine whether the year is a leap year or not.
// Leap years ..., 2012, 2016, 2020, …
       

var x = +prompt("enter year : ");

function leapYear(x)
{
    if (x%4===0)
    {
        if(x%400===0 || x%100!==0)
        {
            alert(x + " is leap year");
        }
        else
        {
            alert(x + "is not aleap year");
        }
    }
    else
    {
        alert(x + "is not a leap year");
    }
}
leapYear(x);

// 3. If the lengths of the sides of a triangle are denoted by a, b, and
// c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2
// Calculate area of triangle using 2 functions
  

var a = +prompt("enter length a : ");
var b = +prompt("enter length b : ");
var c = +prompt("enter length c : ");
var S = 0;
function swl(a,b,c)
{
    S = (a + b + c)/2;
    return S;
}
swl(a,b,c);

function area(S,a,b,c)
{
    alert("Area of triangle is " + (S * (S-a) * (S-b) * (S-c)) + " units");
}
area(S,a,b,c);

// 4. Write a function that receives marks received by a student in 3
// subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction
// and other are for average and percentage. Call those functions
// from mainFunction and display result in mainFunction.


var marksOne = +prompt("Enter marks out of 100 : ");
var marksTwo = +prompt("Enter marks out of 100 : ");
var marksThree = +prompt("Enter marks out of 100 : ");
var a$ = 0;
var p$ = 0;
function avg(marksOne,marksTwo,marksThree)
{
    a$ = (marksOne + marksTwo + marksThree) / 3;
    return a$;
}
function per(marksOne,marksTwo,marksThree)
{
    p$ = ((marksOne + marksTwo + marksThree) / 300 ) * 100;
    return p$;
}
function displayResult()
{
    alert("Average : " + avg(marksOne,marksTwo,marksThree));
    alert("Percenatge : " + per(marksOne,marksTwo,marksThree) + "%");
}
displayResult();

// 5. You have learned the function indexOf. Code your own custom
// function that will perform the same functionality. You can code
// for single character as of now.


var senTence = prompt("Enter  text : ");
var word = prompt('Enter string : ');
function index()
{
    for (var i = 0; i < senTence.length ; i++){
        if (senTence[i] == word)
        {
            alert(i);
            break;
        }
    }
}
index();

// 6. Write a function to delete all vowels from a sentence. Assume
// that the sentence is not more than 25 characters long.
     

var str = prompt('Enter a string : ');
function removeVowels(str){
    var vowels = "aieuo";
    var strArr = str.toLowerCase().split("");
    var newArr = strArr.filter(function(letter){
        if(vowels.indexOf(letter)  == -1){
            return letter;
        }
    });
     var string = "";
     newArr.forEach(function(letter){
         string += letter;
     });
     return string;
}

print(removeVowels(str));

// 7. Write a function with switch statement to count the number of
// occurrences of any two vowels in succession in a line of text.
// For example, in the sentence
// “Pleases read this application and give me gratuity”
// Such occurrences are ea, ea, ui.
      

var str1 = prompt('Enter a sentence : ');
function vowel_count(str1)
{
  var vowel_list = 'aeiouAEIOU';
  var vcount = 0;
  
  for(var x = 0; x < str1.length ; x++)
  {
    if ((vowel_list.indexOf(str1[x]) !== -1) && (vowel_list.indexOf(str1[x+1]) !== -1))
    {
      vcount += 1;
    }
  
  }
  alert(vcount);

}
vowel_count(str1);

// 8. The distance between two cities (in km.) is input through the
// keyboard. Write four functions to convert and print this
// distance in meters, feet, inches and centimeters.
  

var distKm = +prompt("Enter distance (in km): ");
function m()
{
    var distM = distKm * 1000;
    alert('Distance in metre : ' + distM);
}
m();

function cm()
{
    var distCm = distKm * 100000;
    alert('Distance in centi-metre : ' + distCm);
}
cm();

function inch()
{
    var distInch = distKm * 39370.1 ;
    alert('Distance in inches : ' + distInch);
}
inch();

function feet()
{
    var distFeet = distKm * 3280.84;
    alert('Distance in feet : ' + distFeet);
}
feet();

// 9. Write a program to calculate overtime pay of employees.
// Overtime is paid at the rate of Rs. 12.00 per hour for every hour
// worked above 40 hours. Assume that employees do not work
// for fractional part of an hour.
  

var workingHour = +prompt('Enter employees working hours : ');
workingHour = (workingHour / 40) * 100;
function overTimePay()
{
    if (workingHour > 40)
    {
        alert('Amount earned after Over-time : ' + 12 * workingHour);
    }
}
overTimePay();

// 10. A cashier has currency notes of denominations 10, 50 and
// 100. If the amount to be withdrawn is input through the
// keyboard in hundreds, find the total number of currency notes
// of each denomination the cashier will have to give to the
// withdrawer.



var amount = +prompt('Enter the amount to withdraw : ');
function withdrawFunction()
{
    alert( amount/100 + ' Hundred rupees notes ' +( (amount % 100) / 50) + ' fifty rupees notes ' +  (((amount % 100) % 50) / 10) + ' ten rupees notes' );
    alert('remaining rupees : ' +  (((amount % 100) % 50) / 10));
}
withdrawFunction();



