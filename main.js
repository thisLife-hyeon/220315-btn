const btns = document.querySelectorAll("btn__bg");
const btn1 = document.querySelector(".btn__bg--con1");
const btn2 = document.querySelector(".btn__bg--con2");
const btn3 = document.querySelector(".btn__bg--con3");
const colors = ["bgcolor--orange", "bgcolor--green", "bgcolor--purple"];

function btnOnClick() 

  btns.forEach((btn) => {
    document.body.classList.remove(colors[(0, 1, 2, 3)]);
}
  );


btn1.addEventListener("click", function () {
    btn.removeColor();
    document.body.classList.add(colors[0]);
  });
  btn2.addEventListener("click", function () {
    btn.removeColor();
    document.body.classList.add(colors[1]);
  });
  btn3.addEventListener("click", function () {
    btn.removeColor();
    document.body.classList.add(colors[2]);
  });

window.addEventListener("click", btnOnClick);
btnOnClick();
