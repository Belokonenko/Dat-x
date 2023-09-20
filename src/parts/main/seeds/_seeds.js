export default function seeds() {
    const btn = document.querySelector(".seeds__btn");
    const textHidden  = document.querySelector(".seeds__text-hidden");

    btn.addEventListener("click", ()=> {
        console.log('clic hidden text');
        textHidden.classList.add("seeds__text--active");
        btn.style.display = "none";

    });
}
