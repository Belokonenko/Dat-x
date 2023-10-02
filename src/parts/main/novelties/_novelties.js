export default function novelties() {
    const slider = document.querySelector(".slider");
    const sliderLine = document.querySelector(".slider__line");
    const sliderItems = document.querySelectorAll(".slider__item");
    //------------------------------------------------------------
    const bntLeft = document.querySelector(".slider__btn-left");
    const bntRight = document.querySelector(".slider__btn-right");

    let counnt = 0;

    let n = 0;

    // --- main ---

    resetSize();

    window.addEventListener("resize", resetSize);

    bntLeft.addEventListener("click", () => {
        left();
    });

    bntRight.addEventListener("click", () => {
        right();
    });

    // --- main ---

    // --- functions ---

    function getWidthSlider() {
        return slider.clientWidth;
    }

    function getWidthItem() {
        return getWidthSlider() / getCounntVisebleItem();
    }

    function getCounntItems() {
        return sliderItems.length;
    }

    function getMaxCounnt() {
        return getCounntItems() - getCounntVisebleItem();
    }

    function resetSize() {
        setWidthItems();
        mouveLine();
    }

    function setWidthItems() {
        const slideWidth = `${
            getWidthSlider() / getCounntVisebleItem() - calcGap()
        }px`;

        sliderItems.forEach((item) => {
            // mouve all slids and set size
            item.style.width = slideWidth;
        });
    }

    function getGap() {
        return parseInt(window.getComputedStyle(sliderLine).gap);
    }

    function calcGap() {
        let gap = parseInt(window.getComputedStyle(sliderLine).gap);
        return (gap * (getCounntVisebleItem() - 1)) / getCounntVisebleItem();
    }

    function getCounntVisebleItem() {
        let counntVisebleItem = 1;
        let width = getWidthSlider();

        switch (true) {
            case width >= 1440:
                counntVisebleItem = 4;
                break;
            case width >= 1024:
                counntVisebleItem = 4;
                break;
            case width >= 992:
                counntVisebleItem = 3;
                break;
            case width >= 768:
                counntVisebleItem = 3;
                break;
            case width >= 425:
                counntVisebleItem = 2;
                break;
            case width >= 375:
                counntVisebleItem = 1;
                break;
            case width >= 325:
                counntVisebleItem = 1;
                break;
        }

        return counntVisebleItem;
    }

    // --- mouve ---

    function mouveLine() {
        //------- no break point mouve -----------
        console.log(`function mouveline : counnt = ${counnt}`);
        console.log(++n);

        if (counnt < 0) {
            counnt = getMaxCounnt();
        }

        if (counnt > getMaxCounnt()) {
            counnt = 0;
        }

        //------- /no break point mouve -----------
        sliderLine.style.transform = `translateX(-${
            (getWidthItem() + getGap() / getCounntVisebleItem()) * counnt
        }px)`;
    }

    function left() {
        --counnt;
        mouveLine();
    }

    function right() {
        ++counnt;
        mouveLine();
    }

    // --- /mouve ---
    //
    // ---  swipe ---

    let posInit = 0;
    let posX1 = 0;
    let posX2 = 0;
    let posFinal = 0;

    let trfRegExp = /[-0-9.]+(?=px)/;

    slider.addEventListener("mousedown", swipeStart);
    slider.addEventListener("touchstart", swipeStart);

    function getEvent(event) {
        // return evetn for touch or mouse to .clientX
        return event.type.search("touch") !== -1 ? event.touches[0] : event;
    }

    function swipeStart(event) {
        console.log("swipeStart");
        let e = getEvent(event);
        posInit = posX1 = e.clientX; // first coordinate X axis

        sliderLine.style.transition = ""; // remove the smooth transition

        // отслеживать другие события на документе
        slider.addEventListener("touchmove", swipeAction);
        slider.addEventListener("touchend", swipeEnd);
        slider.addEventListener("mousemove", swipeAction);
        slider.addEventListener("mouseup", swipeEnd);
        slider.addEventListener("mouseout", swipeEnd);
        slider.addEventListener("pointerout", swipeEnd);
    }

    function swipeAction(event) {
        console.log("swipeAction");
        let e = getEvent(event);
        let style = sliderLine.style.transform; // получаем занчение transform в формате 'translateX(0px)'
        let transform = +style.match(trfRegExp)[0]; // считываем трансформацию с помощью регулярного выражения и сразу превращаем в число

        posX2 = posX1 - e.clientX; // получаем разницу start и mouve

        posX1 = e.clientX; // текущее положение в x1

        sliderLine.style.transform = `translateX(${transform - posX2}px)`; // двигаем sliderLine
    }

    function swipeEnd() {
        console.log(`swipeEnd()`);
        // финальная позиция курсора
        posFinal = posInit - posX1;

        slider.removeEventListener("touchmove", swipeAction);
        slider.removeEventListener("mousemove", swipeAction);
        slider.removeEventListener("touchend", swipeEnd);
        slider.removeEventListener("mouseup", swipeEnd);
        slider.removeEventListener("mouseout", swipeEnd);

        slider.removeEventListener("pointerout", swipeEnd);

        if (Math.abs(posFinal) > getMaxCounnt()) {
            // убираем знак минус и сравниваем с порогом сдвига слайда
            if (posInit < posX1) {
                // если мы тянули вправо, то уменьшаем номер текущего слайда
                --counnt;
                // если мы тянули влево, то увеличиваем номер текущего слайда
            } else if (posInit > posX1) {
                ++counnt;
            }
        }

        // если курсор двигался, то запускаем функцию переключения слайдов
        if (posInit !== posX1) {
        }

        mouveLine();
    }

    // --- /swipe ---

    // --- /functions ---
    //
}
