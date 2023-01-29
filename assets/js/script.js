"use strict";

/**
 * add event on element
 */
const addEventOnElem = function (elem, type, callback) {
  if (!(elem instanceof HTMLElement) && !(elem instanceof NodeList)) {
    return;
  }

  if (elem instanceof NodeList) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
};

/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelectorAll("[data-nav-toggler]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNav = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
};

addEventOnElem(navToggler, "click", toggleNav);

const closeNav = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
};

addEventOnElem(navbarLinks, "click", closeNav);

/**
 * make slider functionality
 */

// select all element for DOM manupulation

const slider = document.querySelector("[data-slider]");
const nextBtn = document.querySelector("[data-next]");
const prevBtn = document.querySelector("[data-prev]");

// set the default slider position
let sliderPos = 0;

// set the number of total slider items
const totalSliderItems = 3;

// make next slide btn workable
const slideToNext = function () {
  sliderPos++;

  slider.style.transform = `translateX(-${sliderPos}00%)`;

  sliderEnd();
};

addEventOnElem(nextBtn, "click", slideToNext);

// make prev slide btn workable
const slideToPrev = function () {
  sliderPos--;

  slider.style.transform = `translateX(-${sliderPos}00%)`;

  sliderEnd();
};

addEventOnElem(prevBtn, "click", slideToPrev);

// check when slider is end then what sould slider btn do
function sliderEnd() {
  if (sliderPos >= totalSliderItems - 1) {
    nextBtn.classList.add("disabled");
  } else {
    nextBtn.classList.remove("disabled");
  }

  if (sliderPos <= 0) {
    prevBtn.classList.add("disabled");
  } else {
    prevBtn.classList.remove("disabled");
  }
}
sliderEnd();

// product qty functionality

const priceTag = document.querySelector(".price");
const delTag = document.querySelector(".del");
const qtyTag = document.querySelector("[data-qty]");
const qtyPlusBtn = document.querySelector("[data-qty-plus]");
const qtyMinusBtn = document.querySelector("[data-qty-minus]");

let price = 90;
let del = 180;
let qty = parseInt(qtyTag.textContent);

qtyPlusBtn.addEventListener("click", function () {
  qty++;
  qtyTag.textContent = qty;
  priceTag.textContent = `Rp.${(price * qty).toLocaleString()}.000`;
  delTag.textContent = `Rp.${(del * qty).toLocaleString()}.000`;
});

qtyMinusBtn.addEventListener("click", function () {
  qty--;
  if (qty < 1) qty = 1;
  qtyTag.textContent = qty;
  priceTag.textContent = `Rp.${(price * qty).toLocaleString()}.000`;
  delTag.textContent = `Rp.${(del * qty).toLocaleString()}.000`;
});
