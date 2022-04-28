"use strict";

const x = document.querySelector(".qrcode");
const y = document.querySelector(".overlay");
const z = document.querySelector(".print_invoice");
const print = document.getElementById("print");
const cancle = document.getElementById("cancel");
const dateEL = document.querySelector(".date");

const date = String(new Date().getDate()).padStart(2, 0) + "/" + String(new Date().getMonth() + 1).padStart(2, 0) + "/" + new Date().getFullYear();
dateEL.textContent = date;

x.addEventListener("click", function (e) {
  y.classList.add("active");
  z.classList.add("active");
});

print.addEventListener("click", function (e) {
  y.classList.remove("active");
  z.classList.remove("active");
  window.print();
});

cancle.addEventListener("click", function (e) {
  y.classList.remove("active");
  z.classList.remove("active");
});

console.log(date);
