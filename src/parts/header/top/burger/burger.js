export default function burger() {
    const burger = document.querySelector(".burger");
    const dotsR = document.querySelectorAll(".burger__dot-r");
    const lineMidel = document.querySelector(".burger__mid");
    const top = document.querySelector(".burger__top");
    const bot = document.querySelector(".burger__bot");
    const dots = document.querySelectorAll(".burger__dot");
    const lines = document.querySelectorAll(".burger__line");
    const elements = document.querySelectorAll(".burger__element");
    const mobileHeader = document.querySelector(".mobile-header");

    if (burger) {
        burger.addEventListener("click", () => {
            top.classList.toggle("burger__top--active");
            bot.classList.toggle("burger__bot--active");
            mobileHeader.classList.toggle("mobile-header--active")

            lineMidel.classList.toggle("burger__mid--active");

            dotsR.forEach((item) => {
                item.classList.toggle("burger__dot-r--active");
            });

            dots.forEach((item) => {
                item.classList.toggle("burger__dot--active");
            });
            lines.forEach((item) => {
                item.classList.toggle("burger__line--active");
            });

            // elements.forEach((item) => {
            //     item.classList.toggle("burger__element--active")
            // })
        });
    }
}
