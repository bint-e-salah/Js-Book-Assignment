// EVENTS

// 1. Consider you have 4 images in a file as shown below:
// Now When you click on an image it should display in a modal.
// Modal code is available in this assignment file.

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";

}

// 2. Create a paragraph and two buttons “zoom in ”(+) and “zoom out”(-).
// On each click on “zoom in”(+) , add 10px in font size of paragraph.
// And on each click on “zoom out”(-) , minus 10px in font size of paragraph.

function zoomin() {
    var mypara = document.getElementById("para");
    var currWidth = mypara.clientWidth;
    if (currWidth == 2500) return false;
    else {
      mypara.style.width = (currWidth + 100) + "px";
    }
  }
  
  function zoomout() {
    var mypara = document.getElementById("para");
    var currWidth = mypara.clientWidth;
    if (currWidth == 100) return false;
    else {
      mypara.style.width = (currWidth - 100) + "px";
    }
  }




 


        
