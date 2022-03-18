const btns = document.querySelectorAll("btn__bg");
const btn1 = document.querySelector(".btn__bg--con1");
const btn2 = document.querySelector(".btn__bg--con2");
const btn3 = document.querySelector(".btn__bg--con3");
const btn4 = document.querySelector(".btn__bg--con4");
const colors = ["bgcolor--orange", "bgcolor--green", "bgcolor--purple", "bgcolor--plant"];

function resetColor() {
  document.body.classList.remove(colors[0], colors[1], colors[2], colors[3]);
  btns.forEach((btn) => {
    btn.addEventListener("click", resetColor);
  });
}

function onBtn1() {
  resetColor();
  document.body.classList.add(colors[0]);
}
function onBtn2() {
  resetColor();
  document.body.classList.add(colors[1]);
}
function onBtn3() {
  resetColor();
  document.body.classList.add(colors[2]);
}
function onBtn4() {
  resetColor();
  document.body.classList.add(colors[3]);
}

btn1.addEventListener("click", onBtn1);
btn2.addEventListener("click", onBtn2);
btn3.addEventListener("click", onBtn3);
btn4.addEventListener("click", onBtn4);
