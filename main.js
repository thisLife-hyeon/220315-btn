const btns = document.querySelectorAll("btn__bg");
const btn1 = document.querySelector(".btn__bg--con1");
const btn2 = document.querySelector(".btn__bg--con2");
const btn3 = document.querySelector(".btn__bg--con3");
const colors = ["bgcolor--orange", "bgcolor--green", "bgcolor--purple"];

function resetColor() {
  document.body.classList.remove(colors[0]);
  document.body.classList.remove(colors[1]);
  document.body.classList.remove(colors[2]);
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

btn1.addEventListener("click", onBtn1);
btn2.addEventListener("click", onBtn2);
btn3.addEventListener("click", onBtn3);
