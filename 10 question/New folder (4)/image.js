var imageslide = document.querySelector(".imageslide");
var images = document.querySelectorAll(".imageslide img");
var prevButton = document.querySelector(".prev");
var nextButton = document.querySelector(".next");
var i = 0;

function updateSize() {
    size = images[0].clientWidth;
    update();
}

function update() {
    imageslide.style.transform = `translateX(${-size * i}px)`; // Move the carousel to the new position
}

function next() {
    i = (i + 1) % images.length;
    update();
}

function prev() {
    i = (i - 1 + images.length) % images.length;
    update();
}

nextButton.addEventListener("click", next);
prevButton.addEventListener("click", prev);

updateSize();
