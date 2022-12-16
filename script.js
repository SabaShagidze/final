hamburger = document.querySelector(".hamburger");
hamburger.onclick = function () {
  navBar = document.querySelector(".nav_bar");
  navBar.classList.toggle("active");
};

// Slider
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// Image pick
var container = document.getElementById("card_image_container_one");
function change_img_one(image) {
  container.src = image.src;
}
var containerTwo = document.getElementById("card_image_container_two");
function change_img_two(image) {
  containerTwo.src = image.src;
}
var containerThree = document.getElementById("card_image_container_three");
function change_img_three(image) {
  containerThree.src = image.src;
}
var containerFour = document.getElementById("card_image_container_four");
function change_img_four(image) {
  containerFour.src = image.src;
}
var containerFive = document.getElementById("card_image_container_five");
function change_img_five(image) {
  containerFive.src = image.src;
}
var containerSix = document.getElementById("card_image_container_six");
function change_img_six(image) {
  containerSix.src = image.src;
}
var containerSeven = document.getElementById("card_image_container_seven");
function change_img_seven(image) {
  containerSeven.src = image.src;
}
var containerEight = document.getElementById("card_image_container_eight");
function change_img_eight(image) {
  containerEight.src = image.src;
}

// loader
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  loader.classList.add("loader_hidden");

  loader.addEventListener("transitioned", () => {
    document.body.removeChild("loader")
  })
})