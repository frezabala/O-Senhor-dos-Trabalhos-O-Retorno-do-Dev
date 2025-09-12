document.getElementById("frodo").addEventListener("click", () => {
  document.getElementById("Personagem").classList.toggle("ativo");
});

window.addEventListener("keydown", (key) => {
  switch (key.key) {
    case "ArrowUp":
    case "w":
      console.log("up");
      break;
    case "ArrowDown":
    case "s":
      console.log("down");
      break;
    case "ArrowLeft":
    case "a":
      console.log("left");
      break;
    case "ArrowRight":
    case "d":
      console.log("right");
      break;

    default:
      break;
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
