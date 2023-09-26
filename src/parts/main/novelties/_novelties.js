export default function novelties() {
    const container = document.querySelector(".novelties__container");
    const slider = document.querySelector(".novelties__slider");
    const slides = document.querySelectorAll(".novelties__slide").length;
    const buttons = document.querySelectorAll(".novelties__btn");
    const butLeft = document.querySelector(".novelties__btn-left");
    const butRight = document.querySelector(".novelties__btn-right");

    let currentPosition = 0;
    let currentMargin = 0;
    let slidesPerPage = 0;
    let slidesCount = slides - slidesPerPage;
    let containerWidth = container.offsetWidth;
    var prevKeyActive = false;
    var nextKeyActive = true;

    window.addEventListener("resize", checkWidth);

    function checkWidth() {
        containerWidth = container.offsetWidth;
        // console.log(container.offsetWidth);
        setParams(containerWidth);
    }

    function setParams(w) {
        if (w < 551) {
            slidesPerPage = 1;
        } else {
            if (w < 901) {
                slidesPerPage = 2;
            } else {
                if (w < 1101) {
                    slidesPerPage = 3;
                } else {
                    slidesPerPage = 4;
                }
            }
        }

        slidesCount = slides - slidesPerPage;

        if (currentPosition > slidesCount) {
            currentPosition -= slidesPerPage;
        }

        currentMargin = -currentPosition * (100 / slidesPerPage);
        slider.style.marginLeft = currentMargin + "%";

        if (currentPosition > 0) {
            buttons[0].classList.remove("inactive");
        }
        if (currentPosition < slidesCount) {
            buttons[1].classList.remove("inactive");
        }
        if (currentPosition >= slidesCount) {
            buttons[1].classList.add("inactive");
        }
    }

    setParams();

    function slideRight() {
        if (currentPosition != 0) {
            slider.style.marginLeft = currentMargin + 100 / slidesPerPage + "%";
            currentMargin += 100 / slidesPerPage;
            currentPosition--;
        }

        if (currentPosition === 0) {
            buttons[0].classList.add("inactive");
        }

        if (currentPosition < slidesCount) {
            buttons[1].classList.remove("inactive");
        }
    }

    function slideLeft() {
        if (currentPosition != slidesCount) {
            slider.style.marginLeft = currentMargin - 100 / slidesPerPage + "%";
            currentMargin -= 100 / slidesPerPage;
            currentPosition++;
        }

        if (currentPosition == slidesCount) {
            buttons[1].classList.add("inactive");
        }

        if (currentPosition > 0) {
            buttons[0].classList.remove("inactive");
        }
    }

    butLeft.addEventListener("click", () => {
        slideRight();
    });

    butRight.addEventListener("click", () => {
        slideLeft();
    });

    // ---  swipe slides ---

    slider.addEventListener("touchstart", handleTouchStart, false);
    slider.addEventListener("touchmove", handleTouchMove, false);

    let x1 = null;
    let y1 = null;

    function handleTouchStart(event) {
        const firstTouch = event.touches[0];
        
        // console.log(event);
        // console.log(event.touches[0].clientX);
        // console.log(event.touches[0].clientY);

        x1 = firstTouch.clientX;
        y1 = firstTouch.clientY;
    }
    
    function handleTouchMove(event) { 
        if (!x1 || !y1) {
            return false;
        }

        let x2 = event.touches[0].clientX;
        let y2 = event.touches[0].clientY;

        // console.log(x2, y2);
        //
        let xDiff = x1 - x2;
        let yDiff = y1 - y2;

        console.log(xDiff, yDiff);

    }
    // --- /swipe slides ---
}
