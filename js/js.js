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

//mapa

function mapinha(opcao){ 
  var imagem = document.getElementById("mapagoogle");
  if (opcao == 'dois') {
    imagem.src= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.7951326385855!2d-46.78176442467065!3d-23.539869778814587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ceff633543ed97%3A0x4c0a962dfdb17dbb!2sThe%20Lucca%20Gastronomia%20%26%20Eventos%20Osasco!5e0!3m2!1spt-BR!2sbr!4v1733447239754!5m2!1spt-BR!2sbr";    
  }
}