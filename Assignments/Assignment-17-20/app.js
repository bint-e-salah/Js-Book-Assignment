// ARRAYS AND LOOP

// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)
var num = [
    [],
    [],
    [],
]
var eMdA = new Array(2); 
  
document.write("Creating 2D array <br>" + '<br>');
for (var i = 0; i < eMdA.length; i++) { 
    eMdA[i] = new Array(2); 
} 
document.write('<br>' + '<br>');


// 2. Declare and initialize a multidimensional array
// representing the following matrix:

var multiDArray = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];
for (var i=0 ; i < multiDArray.length ; i++){
    document.write(multiDArray[i].join(' ') + '<br>');
}

document.write('<br>' + '<br>');

// 3. Write a program to print numeric counting from 1 to 10.
var i;
for(i=1; i<= 10; i++){
    document.write(i + "</br>");
}

// 4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.
var number = parseInt(prompt("Enter a number to show its multiplication table"));
var len = parseInt(prompt("Enter length multiplication table"))
for(var i = 1; i<= len; i++){
    var result = i * number;
    document.write( "</br>" + number +" " + "*" + " " + i + " " + "=" + "" + result + "</br>")
}

// 5. Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]
var fruits = ["apple","banana", "mango", "orange", "strawberry"]
for(var i=0; i<fruits.length; i++){
    document.write(  fruits[i]+ "</br>" )
}
// 6. Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
var counting = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
document.write("</br>" + "<b>Counting:</b>" + "</br>" + counting + "</br>")

var  reverseCounting = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    document.write("</br>" + "<b>Reversecounting:</b>" + "</br>" + reverseCounting + "</br>")
    
    
var evenNum = [ 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
    document.write("</br>" + "<b>Even:</b>" + "</br>" + evenNum + "</br>")
    
    
var oddNum = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
document.write("</br>" + "<b>Odd:</b>" + "</br>" + oddNum + "</br>")
    
    
var series = ["2k", "4k", "6k", "8k", "10k", "12k", "14k", "16k", "18k", "20k"];
    document.write( "<b>Series:</b>" + "</br>" + series + "</br>")
    
    
// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
var bakeryItems = ["cake","apple pie","cookie","chips","patties"];
var userChoice = prompt("Welcome to ABC bakery What do you want to order sir/ma'am");

for(x=0; x<=4 ; x++){
    if(bakeryItems[x]==userChoice){
        document.write(bakeryItems[x]," ","is available at index"," ",x," " ,"in our bakery");
    }
   
}
if(bakeryItems[0]==userChoice || bakeryItems[1]==userChoice || bakeryItems[2]==userChoice || bakeryItems[3]==userChoice || bakeryItems[4]==userChoice){        
}
else if(bakeryItems[0]!=userChoice || bakeryItems[1]!=userChoice || bakeryItems[2]!=userChoice || bakeryItems[3]!=userChoice || bakeryItems[4]!=userChoice){
    document.write("We are Sorry" ," "+userChoice+" ","is not available in our bakery" + "</br>");
}


// After searching, prompt the user whether the given item is
// found in the list or not. Example:

// 8. Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12].
var rNum = [24, 53, 78, 91, 12];
document.write('Array Items : ' + rNum + '<br>');

var largestNum= 0;

for (i=0; i<=largestNum;i++){
    if (rNum[i]>largestNum) {
        var largestNum=rNum[i];
    }
}




document.write('The largest number in an array is : '+largestNum + '<br>' + '<br>');

// 9. Write a program to identify the smallest number in the
// given array.
// A = [24, 53, 78, 91, 12]
var rNum1 = [24, 53, 78, 91, 12];
document.write('Array Items : ' + rNum1 + '<br>');

var smallest= 0;

for (i=0; i>=smallest;i++){
    if (rNum1[i]>smallest) {
        var smallest=rNum1[i];
    }
}



document.write('The smallest number in an array is : '+ smallest + '<br>' + '<br>');

// 10. Write a program to print multiples of 5 ranging 1 to
// 100.
var mNum = 5;
for(i=1;i<=20;i++){
    document.write(i*mNum+",");
}
