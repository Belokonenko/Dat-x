export default function orderCall() {

    const telBlock = document.querySelector(".tel-block");
    const telBlockList = document.querySelector(".tel-block__list");

    telBlock.addEventListener("mouseover", () => {
        telBlockList.classList.add("tel-block__list--active")
        console.log("mouseover");

    });

    telBlock.addEventListener("mouseleave", () => {
        telBlockList.classList.remove("tel-block__list--active")
        console.log("mouseleave");
    });
}
