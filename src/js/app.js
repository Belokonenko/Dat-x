'use strict';
import burger from "../parts/header/top/burger/burger.js";
import order from "../parts/header/order/_order.js";
import  navProduct  from "../parts/header/nav-product/_nav-product.js";
document.addEventListener('DOMContentLoaded', () => {
    order();
    burger();
    navProduct();
})
