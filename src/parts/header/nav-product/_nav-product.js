export default function navProduct() {
    const navProductBtnArr = document.querySelector(".nav-product__btn-arr");
    const navItems = document.querySelectorAll(".nav-product__item");
    const navItemsHidenn = document.querySelectorAll(
        ".nav-product__item-hidenn"
    );
    const navItemsHidennVisble = document.querySelectorAll(
        ".nav-product__item-viseble"
    );

    navProductBtnArr.addEventListener("click", () => {
        console.log("click btn");

        navProductBtnArr.classList.toggle("nav-product__btn-arr--active")

        navItemsHidenn.forEach((item) => {
            item.classList.toggle("nav-product__item-viseble");
        });
    });
    
    //click btn close btn 
    navItems.forEach((item) => {
        item.addEventListener("click", (e) => {
            if (!e.target.classList.contains("arr")) {
                navItemsHidenn.forEach((item) => {
                    item.classList.remove("nav-product__item-viseble");
                });
            
            navProductBtnArr.classList.remove("nav-product__btn-arr--active")// roteate arr 0
            }
        });
    });
}
