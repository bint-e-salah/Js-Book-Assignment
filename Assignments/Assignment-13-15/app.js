// /ARRAYS
// 1. Declare an empty array using JS literal notation to store
// student names in future.

var studentsList = [];

// 2. Declare an empty array using JS object notation to store
// student names in future.
var studentArr = new Array();

// 3. Declare and initialize a strings array.
var myArr = ["saba", "Anum", "Dua"]
// 4. Declare and initialize a numbers array.
var arr = [1, 2, 3, 4, 5];
console.log(arr);
// 5. Declare and initialize a boolean array.
var booleanArr = [true, false,true];
// 6. Declare and initialize a mixed array.
var mixedArr = ["chair", 9, "ali", 5, "table", true];
// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:

var availableQulificationPak = ["SSC", "HSC", "BSC", "BS", "BCOM","MS", "M.Phil", "PhD"];
document.write("</br>" +"<h2>Qualifications</h2>" + "<h3>1) SSC </h3>" + "<h3>2) HSC</h3>" + "<h3>3) BSC</h3>" + "<h3>4) BS</h3>" + "<h3>5) BCOM</h3>" + "<h3>6) MS</h3>" + "<h3>7) M.Phil</h3>" + "<h3>8) PhD")
// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:
var studentsName = ["Ali", "Ahmed", "Taha"];
var studentsScore = [320, 440, 480];
var totalScore = 500;
var percentages = [(320/500)*100,(440/500)*100, (480/500)*100];
    console.log(studentsName, percentages)
document.write("</br>" + "Score of Ali is 320. percentage: 64%" + "</br>" + "Score of Ahmed is 440. Percentage: 88%" + "</br>" + "Score of Taha is 480. Percentage: 96%")
// 9. Initialize an array with color names. Display the array
// elements in your browser.
var colourName = ["blue", "red", "Yellow"];
document.write("</br>" + colourName)
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
colourName.unshift(prompt("Which colour do you want to add at the begining of list"));

document.write("</br>" + colourName)
// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.
colourName.push(prompt("Which colour do you want to add at the end of list"));
document.write("</br>" + colourName)

// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
colourName.unshift(prompt("Enter first colour name to add at teh begining"));
colourName.unshift(prompt("Enter second colour name to add at teh begining"));
document.write("</br>" + colourName)

// d. Delete the first color in the array. Display the updated
// array in your browser.
colourName.shift();
document.write("</br>" + colourName)

// e. Delete the last color in the array. Display the updated
// array in your browser.
colourName.pop();
document.write("</br>" + colourName)
// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.
var index = +(prompt("At which index do you want to add a colour name?"));
var colour = prompt("Enter colour name")

colourName.splice(index,0,colour)
document.write("</br>" + colourName)

// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.

var deleteIndex = +prompt("Enter index position from you want to delete colours?")
var deleteNumber = +prompt("Enter the number of elements you want to delete")
colourName.splice(deleteIndex, deleteNumber)
document.write("</br>" + colourName)
// 10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.
var studentScore  = [340, 415 , 420, 339, 410, 320, 430 ];

document.write("</br>" + "Scores of the Students :" + studentScore)
studentScore.sort( function( a , b){
    if(a > b) return 1;
    if(a < b) return -1;
    return 0;
});

console.log(studentScore);
document.write("</br>" + "Scores of the ordered students :" + studentScore)

// 11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.
var cities = ["Karach", "Lahore", "Islamabad","Peshawr", "Quetta", "Multan"]
var selectedCities = cities.slice(1, 4);
document.write("</br>"+ "Cities List:" + "</br>" + cities + "</br>" + "Selected List :" + "</br>" + selectedCities)
// 12. Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method

var arr = ["This", "is", "my", "cat"];
document.write("</br>" + arr.join(""));

// 13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)

// create new array
var hardwareList = new Array();

// push on four entries
hardwareList.push('Keyboard');
hardwareList.push('Mouse');
hardwareList.push('Printer');
hardwareList.push('Monitor');
document.write("</br>" + "Divices :" + "</br>" + " " + hardwareList)
// shift three entries
document.write("</br>" + "Out" + "</br>" + hardwareList.shift());  // returns first
document.write("</br>" + "Out" + "</br>" + hardwareList.shift());  // returns second
document.write("</br>" + "Out" + "</br>" + hardwareList.shift());  // retur ns third
document.write("</br>" + "Out" + "</br>" + hardwareList )  //returns fourth
// 14. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last In-
// First Out)

// create new array
var hardwareList = new Array();
// push on four entries

hardwareList.push('Keyboard');
hardwareList.push('Mouse');
hardwareList.push('Printer');
hardwareList.push('Monitor');
document.write("</br>" + "Divices :" + "</br>" + " " + hardwareList)

// pop three entries
document.write("</br>" + "Out" + "</br>" + hardwareList.pop());  // returns first
document.write("</br>" + "Out" + "</br>" + hardwareList.pop());  // returns second
document.write("</br>" + "Out" + "</br>" + hardwareList.pop());  // returns third
document.write("</br>" + "Out" + "</br>" + hardwareList)  // returns fourth


// 15. Write a program to store phone manufacturers (Apple,
// Samsung, Motorola, Nokia, Sony & Haier) in an array.
// Display the following dropdown/select menu in your
// browser using document.write() method:
function favTutorial() {  
    var mylist = document.getElementById("myList");  
    document.getElementById("favourite").value = mylist.options[mylist.selectedIndex].text;  
    }  
