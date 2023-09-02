export default function orderCall() {
    const telBlock = document.querySelectorAll(".tel-block");
    const telBlockList = document.querySelectorAll(".tel-block__list");

    telBlock.forEach((item, i) => {
        item.addEventListener("mouseover", () => {
            telBlockList[i].classList.add("tel-block__list--active");
            console.log("mouseover");
        });
        item.addEventListener("mouseleave", () => {
            telBlockList[i].classList.remove("tel-block__list--active");
            console.log("mouseleave");
        });
    });
}
