// Events | JAVASCRIPT

// 1. Create a signup form and display form data in your web
// page on submission.

var modal = document.getElementById('btnid');

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// 2. Suppose in your webpage there is content area in which
// you have entered your item details, but user can only see
// some details on first look. When user clicks on “Read
// more” button, full detail of that particular item will be
// displayed.

function readmore() {
    var text = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, neque. Qui expedita cum sed, doloremque nisi ex dignissimos ad corporis laborum ratione tempora architecto laboriosam id repellendus tenetur corrupti distinctio."
    var pera = document.getElementById('pera');
    pera.innerHTML = text;
}

// 3. In previous assignment you have created a tabular data
// using javascript. Let’s modify that. Create a form which
// takes student’s details and show each student detail in
// table. Each row of table must contain a delete button and
// an edit button. On click on delete button entire row should
// be deleted. On click on edit button, a hidden form will
// appear with the values of that row.

function delfunction() {
    document.getElementById("xyz").remove();
  }
  function editfunction() {
    document.getElementById("xyz").edit();
  }
  






