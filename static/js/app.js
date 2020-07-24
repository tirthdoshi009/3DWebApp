
console.log("Hello from app.js");
var x = document.getElementById("demo_output");
x.addEventListener("click",make_visible);
function make_visible(){
    var y = document.getElementById("view_image");
    y.style.visibility = "visible";
}

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
// function openNav() {
//   document.getElementById("mySidenav").style.width = "250px";
//   document.getElementById("main").style.marginLeft = "250px";
// }

// /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
// function closeNav() {
//   document.getElementById("mySidenav").style.width = "0";
//   document.getElementById("main").style.marginLeft = "0";
// }

function openNav() {
    document.getElementById("mySidenav").style.display = "block";
  }
  
  /* Close/hide the sidenav */
  function closeNav() {
    document.getElementById("mySidenav").style.display = "none";
  }