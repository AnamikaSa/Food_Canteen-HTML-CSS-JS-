const slideshow = document.querySelectorAll(".intro-slideshow img");

const nextImageDelay = 5000;
let currentImageCounter = 0;

slideshow[currentImageCounter].style.opacity = 1;

setInterval(nextim, nextImageDelay);

function nextim() {
  
  slideshow[currentImageCounter].style.opacity = 0;

  currentImageCounter = (currentImageCounter+1) % slideshow.length;

  
  slideshow[currentImageCounter].style.opacity = 1;
}