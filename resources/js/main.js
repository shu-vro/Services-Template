let radio1 = document.getElementById("r1");
let radio2 = document.getElementById("r2");
let radio3 = document.getElementById("r3");
let radio4 = document.getElementById("r4");

let slideIndex = 0;

// Slideshow effect.
function slideshow() {
    slideIndex++;
    if (slideIndex % 3 == 0) {
        if (radio1.checked) {
            radio2.checked = true;
        } else if (radio2.checked) {
            radio3.checked = true;
        } else {
            radio1.checked = true;
        }
    }
    setTimeout(slideshow, 1000);
}

slideshow();

let creditSection = document.querySelector(".credits");

window.addEventListener("scroll", () => {
    if (creditSection.classList.contains("active")) {
        increase(".palate .number.one", 2564, 3, 1);
        increase(".palate .number.two", 2432, 3, 1);
        increase(".palate .number.three", 163, 1, 10);
    }
});

let triggerHeight = (window.innerHeight * 4) / 5;
aos(triggerHeight);