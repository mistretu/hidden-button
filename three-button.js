const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const mesaj = document.getElementById("mesaj");

btn1.addEventListener("click", () => {
  mesaj.innerHTML = "Loser !";
});

btn2.addEventListener("click", () => {
  mesaj.innerHTML = "Winner !";
});

btn3.addEventListener("click", () => {
  mesaj.innerHTML = "Loser !";
});
