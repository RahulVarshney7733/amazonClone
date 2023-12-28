let slideIndex = 0;
const slides = document.getElementsByClassName('slideshow-item');

function showSlide(index) {
    if (index < 0) {
        slideIndex = slides.length - 1;
    } else if (index >= slides.length) {
        slideIndex = 0;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
    }
    slides[slideIndex].classList.add('active');
}

function changeSlide(n) {
    showSlide(slideIndex += n);
}

function startSlideshow() {
    setInterval(() => {
        changeSlide(1); // Automatically change to the next slide
    }, 5000); // Change slide every 2 seconds
}

startSlideshow(); // Start the automatic slideshow
showSlide(slideIndex); // Show initial slide
