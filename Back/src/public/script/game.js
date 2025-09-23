async function fetchUserProfile() {
  const token = localStorage.getItem("token");
  if (token || typeof token == undefined) {
    window.location.href = "login.html?alert=true";
    return;
  } else {
    console.log(token);
  } /*
  try {
    const resposta = await fetch("http://localhost:3000/users/me", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (!resposta.ok) {
      const erro = await resposta.text();
      throw new Error(erro);
    }
    const dados = await resposta.json();
    document.getElementById("nome").value = dados.name || "";
    document.getElementById("email").value = dados.email || "";
  } catch (erro) {
    console.error("Erro ao buscar perfil do usuário:", erro);
    document.getElementById("mensagem").textContent =
      "Erro ao carregar perfil: " + erro.message;
    document.getElementById("mensagem").style.color = "red";
  }
    */
}

window.addEventListener("DOMContentLoaded", fetchUserProfile);

const aragorn_health = document.getElementById("aragorn_health");
const sam_health = document.getElementById("sam_health");
const legolas_health = document.getElementById("legolas_health");
const gimli_health = document.getElementById("gimli_health");
const boromir_health = document.getElementById("boromir_health");
const gandalf_health = document.getElementById("gandalf_health");

const style = document.documentElement.style;

function sam_percentage(x) {
  style.setProperty("--sam-health", x);
}
function sam_reduce_health() {
  let [healthx, healthy] = sam_health.innerHTML.split("/");
  check = current_enemy.baseDamage - sam.defense;
  if (check > 0) {
    healthx -= check;
    sam_health.innerHTML = `${healthx}/${healthy}`;
    sam_percentage(`${(healthx / healthy) * 100}%`);
  }
}

function aragorn_percentage(x) {
  style.setProperty("--aragorn-health", x);
}
function aragorn_reduce_health() {
  let [healthx, healthy] = aragorn_health.innerHTML.split("/");
  check = current_enemy.baseDamage - aragorn.defense;
  if (check > 0) {
    healthx -= check;
    aragorn_health.innerHTML = `${healthx}/${healthy}`;
    aragorn_percentage(`${(healthx / healthy) * 100}%`);
  }
}

function legolas_percentage(x) {
  style.setProperty("--legolas_health", x);
}
function legolas_reduce_health() {
  let [healthx, healthy] = legolas_health.innerHTML.split("/");
  check = current_enemy.baseDamage - legolas.defense;
  if (check > 0) {
    healthx -= check;
    legolas_health.innerHTML = `${healthx}/${healthy}`;
    legolas_percentage(`${(healthx / healthy) * 100}%`);
  }
}

function gimli_percentage(x) {
  style.setProperty("--gimli_health", x);
}
function gimli_reduce_health() {
  let [healthx, healthy] = gimli_health.innerHTML.split("/");
  check = current_enemy.baseDamage - gimli.defense;
  if (check > 0) {
    healthx -= check;
    gimli_health.innerHTML = `${healthx}/${healthy}`;
    gimli_percentage(`${(healthx / healthy) * 100}%`);
  }
}

function boromir_percentage(x) {
  style.setProperty("--boromir_health", x);
}
function boromir_reduce_health() {
  let [healthx, healthy] = boromir_health.innerHTML.split("/");
  check = current_enemy.baseDamage - boromir.defense;
  if (check > 0) {
    healthx -= check;
    boromir_health.innerHTML = `${healthx}/${healthy}`;
    boromir_percentage(`${(healthx / healthy) * 100}%`);
  }
}

function gandalf_percentage(x) {
  style.setProperty("--gandalf_health", x);
}
function gandalf_reduce_health() {
  let [healthx, healthy] = gandalf_health.innerHTML.split("/");
  check = current_enemy.baseDamage - gandalf.defense;
  if (check > 0) {
    healthx -= check;
    gandalf_health.innerHTML = `${healthx}/${healthy}`;
    gandalf_percentage(`${(healthx / healthy) * 100}%`);
  }
}

const current_enemy = {
  nome: "",
  baseDamage: 1,
  defense: 0,
  magicRes: 0,
  health: 10,
  totalHealth: 10,
  effects: [],
};
const sam = {
  nome: "Samwise",
  baseDamage: 1,
  defense: 0,
  magicRes: 0,
  health: 10,
  totalHealth: 10,
  effects: [],
};
const aragorn = {
  nome: "Aragorn",
  baseDamage: 1,
  defense: 0,
  magicRes: 0,
  health: 10,
  totalHealth: 10,
  effects: [],
};
const legolas = {
  nome: "Legolas",
  baseDamage: 1,
  defense: 0,
  magicRes: 0,
  health: 10,
  totalHealth: 10,
  effects: [],
};
const gimli = {
  nome: "Gimli",
  baseDamage: 1,
  defense: 0,
  magicRes: 0,
  health: 10,
  totalHealth: 10,
  effects: [],
};
const boromir = {
  nome: "Boromir",
  baseDamage: 1,
  defense: 0,
  magicRes: 0,
  health: 10,
  totalHealth: 10,
  effects: [],
};
const gandalf = {
  nome: "Gandalf",
  baseDamage: 1,
  defense: 0,
  magicRes: 0,
  health: 10,
  totalHealth: 10,
  effects: [],
};

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

document.getElementById("show_boromir").addEventListener("click", () => {
  document.getElementById("boromir").classList.toggle("ativo");
});

document.getElementById("show_gandalf").addEventListener("click", () => {
  document.getElementById("gandalf").classList.toggle("ativo");
});

document.getElementById("bomb").addEventListener("click", () => {
  document.getElementById("map").classList.toggle("hide_map");
  document.getElementById("combat").classList.toggle("show_combat");
});

const table = document.getElementById("table");
table.rows[1].cells[1].textContent = "ola";

document.getElementById("sam").addEventListener("click", () => {
  document.getElementById("character_combat").className = "combat_sam";
});

function enemy(x) {
  document.getElementById("enemy_combat").className = x;
}

//seta valor de vida dos personagens
function loadHealth() {
  sam_health.innerHTML = `${sam.health}/${sam.totalHealth}`;
  sam_percentage(`${(sam.health / sam.totalHealth) * 100}%`);

  aragorn_health.innerHTML = `${aragorn.health}/${aragorn.totalHealth}`;
  aragorn_percentage(`${(aragorn.health / aragorn.totalHealth) * 100}%`);

  gimli_health.innerHTML = `${gimli.health}/${gimli.totalHealth}`;
  gimli_percentage(`${(gimli.health / gimli.totalHealth) * 100}%`);

  legolas_health.innerHTML = `${legolas.health}/${legolas.totalHealth}`;
  legolas_percentage(`${(legolas.health / legolas.totalHealth) * 100}%`);

  boromir_health.innerHTML = `${boromir.health}/${boromir.totalHealth}`;
  boromir_percentage(`${(boromir.health / boromir.totalHealth) * 100}%`);

  gandalf_health.innerHTML = `${gandalf.health}/${gandalf.totalHealth}`;
  gandalf_percentage(`${(gandalf.health / gandalf.totalHealth) * 100}%`);
}
