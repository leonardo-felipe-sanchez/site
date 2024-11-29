//carrosel

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 4000); // Change image every 2 seconds
}

//navbar customizado

const nav = document.getElementById("cabeca");
window.onscroll = function() {
  if (window.pageYOffset >= 20 || document.documentElement.scrollTop >= 20) {
    nav.classList.add("nav-colored");
    nav.classList.remove("nav-transparent");
  } else {
    nav.classList.remove("nav-colored");
    nav.classList.add("nav-transparent");
  }
};