export default function order() {
    const telBlock = document.querySelectorAll(".order__tel-block");
    const telBlockList = document.querySelectorAll(".order__list");

    telBlock.forEach((item, i) => {
        item.addEventListener("mouseover", () => {
            telBlockList[i].classList.add("order__list--active");
            console.log("mouseover");
        });
        item.addEventListener("mouseleave", () => {
            telBlockList[i].classList.remove("order__list--active");
            console.log("mouseleave");
        });
    });
}
