export default function order() {
    const telBlock = document.querySelectorAll(".order__tel-block");
    const telBlockList = document.querySelectorAll(".order__list");
    const orderTelRefs = document.querySelectorAll(".order__tel-ref");

    telBlock.forEach((item, i) => {
        item.addEventListener("mouseover", () => {
            telBlockList[i].classList.add("order__list--active");
        });
        item.addEventListener("mouseleave", () => {
            telBlockList[i].classList.remove("order__list--active");
        });
    });

}
