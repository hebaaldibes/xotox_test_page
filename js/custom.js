function openNav() {
  document.getElementById("header-sidenav").style.width = "100%";
  document.getElementById("header-sidenav").style.display = "block";
  document.getElementById("openNav").style.display = "none";
}
function closeNav() {
document.getElementById("header-sidenav").style.width = "0";
  document.getElementById("header-sidenav").style.display = "none";
  document.getElementById("openNav").style.display = "block";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slider");
  var demo = document.getElementsByClassName("demo");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}
