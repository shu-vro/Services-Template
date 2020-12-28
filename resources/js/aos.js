let aos_container = document.querySelectorAll(".aos_container");

function aos(trigger_from_top) {
    for (let i = 0; i < aos_container.length; i++) {
        window.addEventListener("scroll", () => {
            var positionY = aos_container[i].getBoundingClientRect().top - trigger_from_top;
            aos_container[i].style.position = "relative";

            if (positionY <= 0) {
                aos_container[i].classList.add("active");
            } else {
                aos_container[i].classList.remove("active");
            }
        });
    }
}
