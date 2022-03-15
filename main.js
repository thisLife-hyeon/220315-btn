const btn1 = document.querySelector(".btn__bg--con1");
const btn2 = document.querySelector(".btn__bg--con2");
const btn3 = document.querySelector(".btn__bg--con3");
const btn4 = document.querySelector(".btn__bg--con4");

const colors = ["bgcolor--orange", "bgcolor--green", "bgcolor--purple"];

// btn1.addEventListener("click", function () {
//   document.body.classList.toggle(colors[0]);
//   document.body.classList.remove(colors[(0, 1, 2, 3)]);
// });

// btn2.addEventListener("click", function () {
//   document.body.classList.toggle(colors[1]);
//   document.body.classList.remove(colors[(0, 1, 2, 3)]);
// });

// btn3.addEventListener("click", function () {
//   document.body.classList.toggle(colors[2]);
//   document.body.classList.remove(colors[(0, 1, 2, 3)]);
// });

function removeColor() {
  document.body.classList.remove(colors[(0, 1, 2, 3)]);
}

function onBtn1() {
  removeColor(document.body.classList.toggle(colors[0]));
}
function onBtn2() {
  removeColor(document.body.classList.toggle(colors[1]));
}
function onBtn3() {
  removeColor(document.body.classList.toggle(colors[2]));
}

btn1.addEventListener("click", onBtn1);
btn2.addEventListener("click", onBtn2);
btn3.addEventListener("click", onBtn3);
