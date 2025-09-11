document.getElementById("frodo").addEventListener("click", () => {
  document.getElementById("Personagem").classList.toggle("ativo");
});

window.addEventListener("keydown", (key) => {
  if (key.key == "ArrowUp" || key.key == "w") {
    console.log("up");
  }
  if (key.key == "ArrowDown" || key.key == "s") {
    console.log("down");
  }
  if (key.key == "ArrowLeft" || key.key == "a") {
    console.log("left");
  }
  if (key.key == "ArrowRight" || key.key == "d") {
    console.log("right");
  }
});

document.getElementById("show_aragorn").addEventListener("click", () => {
  document.getElementById("aragorn").classList.toggle("ativo");
});

document.getElementById("show_legolas").addEventListener("click", () => {
  document.getElementById("legolas").classList.toggle("ativo");
});

document.getElementById("show_gimli").addEventListener("click", () => {
  document.getElementById("gimli").classList.toggle("ativo");
});
