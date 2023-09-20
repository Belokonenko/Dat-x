'use strict';
import burger from "../parts/header/top/burger/burger.js";
import order from "../parts/header/order/_order.js";
import  navProduct  from "../parts/header/nav-product/_nav-product.js";
import seeds from "../parts/main/seeds/_seeds.js";
import novelties from "../parts/main/novelties/_novelties.js";

document.addEventListener('DOMContentLoaded', () => {
    order();
    burger();
    navProduct();
    seeds();
    novelties();
})
