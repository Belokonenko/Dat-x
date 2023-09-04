'use strict';
import novelties from "../parts/main/novelties/_novelties.js"
import burger from "../parts/header/top/burger/burger.js";
import order from "../parts/header/order/_order.js";
import btn from "../parts/elements/btn/_btn.js";

document.addEventListener('DOMContentLoaded', () => {
    // novelties();
    order();
    burger();
    btn();
})
