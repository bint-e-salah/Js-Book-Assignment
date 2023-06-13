// EVENTS

// 1. Consider you have 4 images in a file as shown below:
// Now When you click on an image it should display in a modal.
// Modal code is available in this assignment file.






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




 


        
