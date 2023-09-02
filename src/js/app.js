'use strict';
import novelties from "../parts/main/novelties/_novelties.js"
//import baner from "../parts/baner/baner.js";
import burger from "../parts/header/top/burger/burger.js";
import orderCall from "../parts/header/order-call/_order-call.js";
document.addEventListener('DOMContentLoaded', () => {
    // novelties();
    orderCall();
    burger();
})
