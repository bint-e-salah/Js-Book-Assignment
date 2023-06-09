// EVENTS
// Events | JAVASCRIPT
// Page 1 of 2
// 1. Show an alert box on click on a link.
   //Done in html

// 2. Display some Mobile images in browser. On click on an
// image Show the message in alert to user.

     //Done in html

// 4. Display an image in browser. Change the picture on mouseover and set the
// first picture on mouseout.

    //Done in html


// 3. Display 10 student records in table and each row should contain a delete
// button. If you click on a button to delete a record, entire row should be
// deleted.
// Before delete
// After click on delete button on “Mark ” row



 function delfunction() {
     document.getElementById("xyz").remove();
   }

   

// 5. Show a counter in browser. Counter should increase on click on increase
// button and decrease on click on decrease button. And show updated counter
// value in browser.

 
let btnAdd = document.querySelector('#add');
let btnSub = document.querySelector('#sub');
let input = document.querySelector('input');

btnAdd.addEventListener('click' , () =>{
    input.value = parseInt(input.value) + 1;
});

btnSub.addEventListener('click' , () =>{
    input.value = parseInt(input.value) - 1;
});

