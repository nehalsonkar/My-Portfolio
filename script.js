function toggleMenu() {
    var navbar = document.getElementById("navbar");
    if (navbar.style.display === "none") {
        navbar.style.display = "block";
    } else {
      navbar.style.display = "none";
    }
    
  }

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var head = document.getElementById("heades");

// Get the offset position of the navbar
var sticky = head.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    head.classList.add("sticky")
  } else {
    head.classList.remove("sticky");
  }
}
