async function fetchUserProfile() {
  const token = localStorage.getItem("token");
  if (token) {
    window.location.href = "login.html?alert=true";
    return;
  } else {
    console.log(token);
  }
  /*
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
const enemy_health = document.getElementById("enemy_health");
const table = document.getElementById("table");

const style = document.documentElement.style;

function sam_percentage(x) {
  style.setProperty("--sam-health", x);
}
function sam_reduce_health() {
  let [healthx, healthy] = sam_health.innerHTML.split("/");
  check = current_enemy.baseDamage - sam.defense;
  if (check > 0) {
    if (healthx > 0 && healthx - check > 0) {
      healthx -= check;
      sam_health.innerHTML = `${healthx}/${healthy}`;
      sam_percentage(`${(healthx / healthy) * 100}%`);
    } else if (healthx - check <= 0) {
      sam_health.innerHTML = `0/${healthy}`;
      sam_percentage("0%");
    }
  }
}

function aragorn_percentage(x) {
  style.setProperty("--aragorn-health", x);
}
function aragorn_reduce_health() {
  let [healthx, healthy] = aragorn_health.innerHTML.split("/");
  check = current_enemy.baseDamage - aragorn.defense;
  if (check > 0) {
    if (healthx > 0 && healthx - check > 0) {
      healthx -= check;
      aragorn_health.innerHTML = `${healthx}/${healthy}`;
      aragorn_percentage(`${(healthx / healthy) * 100}%`);
    } else if (healthx - check <= 0) {
      aragorn_health.innerHTML = `0/${healthy}`;
      aragorn_percentage("0%");
    }
  }
}

function legolas_percentage(x) {
  style.setProperty("--legolas_health", x);
}
function legolas_reduce_health() {
  let [healthx, healthy] = legolas_health.innerHTML.split("/");
  check = current_enemy.baseDamage - legolas.defense;
  if (check > 0) {
    if (healthx > 0 && healthx - check > 0) {
      healthx -= check;
      legolas_health.innerHTML = `${healthx}/${healthy}`;
      legolas_percentage(`${(healthx / healthy) * 100}%`);
    } else if (healthx - check <= 0) {
      legolas_health.innerHTML = `0/${healthy}`;
      legolas_percentage("0%");
    }
  }
}

function gimli_percentage(x) {
  style.setProperty("--gimli_health", x);
}
function gimli_reduce_health() {
  let [healthx, healthy] = gimli_health.innerHTML.split("/");
  check = current_enemy.baseDamage - gimli.defense;
  if (check > 0) {
    if (healthx > 0 && healthx - check > 0) {
      healthx -= check;
      gimli_health.innerHTML = `${healthx}/${healthy}`;
      gimli_percentage(`${(healthx / healthy) * 100}%`);
    } else if (healthx - check <= 0) {
      gimli_health.innerHTML = `0/${healthy}`;
      gimli_percentage("0%");
    }
  }
}

function boromir_percentage(x) {
  style.setProperty("--boromir_health", x);
}
function boromir_reduce_health() {
  let [healthx, healthy] = boromir_health.innerHTML.split("/");
  check = current_enemy.baseDamage - boromir.defense;
  if (check > 0) {
    if (healthx > 0 && healthx - check > 0) {
      healthx -= check;
      boromir_health.innerHTML = `${healthx}/${healthy}`;
      boromir_percentage(`${(healthx / healthy) * 100}%`);
    } else if (healthx - check <= 0) {
      boromir_health.innerHTML = `0/${healthy}`;
      boromir_percentage("0%");
    }
  }
}

function gandalf_percentage(x) {
  style.setProperty("--gandalf_health", x);
}
function gandalf_reduce_health() {
  let [healthx, healthy] = gandalf_health.innerHTML.split("/");
  check = current_enemy.baseDamage - gandalf.defense;
  if (check > 0) {
    if (healthx > 0 && healthx - check > 0) {
      healthx -= check;
      gandalf_health.innerHTML = `${healthx}/${healthy}`;
      gandalf_percentage(`${(healthx / healthy) * 100}%`);
    } else if (healthx - check <= 0) {
      gandalf_health.innerHTML = `0/${healthy}`;
      gandalf_percentage("0%");
    }
  }
}

function enemy_percentage(x) {
  style.setProperty("--enemy-health", x);
}
function enemy_reduce_health(attacker) {
  let [healthx, healthy] = enemy_health.innerHTML.split("/");
  check = attacker.baseDamage - current_enemy.defense;
  if (check > 0) {
    if (healthx - check > 0) {
      healthx -= check;
      enemy_health.innerHTML = `${healthx}/${healthy}`;
      enemy_percentage(`${(healthx / healthy) * 100}%`);
    } else if (healthx - check <= 0) {
      enemy_health.innerHTML = `0/${healthy}`;
      enemy_percentage("0%");
    }
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
  document.getElementById("characters").classList.toggle("active");
});

document.getElementById("sam").addEventListener("click", () => {
  document.getElementById("character_combat").className = "combat_sam";
});

document.getElementById("show_aragorn").addEventListener("click", () => {
  document.getElementById("aragorn").classList.toggle("active");
});
document.getElementById("aragorn").addEventListener("click", () => {
  document.getElementById("character_combat").className = "combat_aragorn";
});

document.getElementById("show_legolas").addEventListener("click", () => {
  document.getElementById("legolas").classList.toggle("active");
});
document.getElementById("legolas").addEventListener("click", () => {
  document.getElementById("character_combat").className = "combat_legolas";
});

document.getElementById("show_gimli").addEventListener("click", () => {
  document.getElementById("gimli").classList.toggle("active");
});
document.getElementById("gimli").addEventListener("click", () => {
  document.getElementById("character_combat").className = "combat_gimli";
});

document.getElementById("show_boromir").addEventListener("click", () => {
  document.getElementById("boromir").classList.toggle("active");
});
document.getElementById("boromir").addEventListener("click", () => {
  document.getElementById("character_combat").className = "combat_boromir";
});

document.getElementById("show_gandalf").addEventListener("click", () => {
  document.getElementById("gandalf").classList.toggle("active");
});
document.getElementById("gandalf").addEventListener("click", () => {
  document.getElementById("character_combat").className = "combat_gandalf";
});

document.getElementById("bomb").addEventListener("click", () => {
  document.getElementById("map").classList.toggle("hide_map");
  document.getElementById("combat").classList.toggle("show_combat");
});

pos = [2, 0];
positions = [
  [
    () => {
      document.getElementById("aragorn").classList.toggle("active");
    },
    () => {
      document.getElementById("legolas").classList.toggle("active");
    },
    () => {
      document.getElementById("gimli").classList.toggle("active");
    },
    () => {
      document.getElementById("boromir").classList.toggle("active");
    },
    () => {
      document.getElementById("gandalf").classList.toggle("active");
    },
    () => {},
    () => {},
    () => {},
  ],
  [
    () => {},
    () => {},
    () => {},
    () => {},
    () => {},
    () => {},
    () => {},
    () => {},
  ],
  [
    () => {},
    () => {},
    () => {},
    () => {},
    () => {},
    () => {},
    () => {},
    () => {},
  ],
  [
    () => {},
    () => {},
    () => {},
    () => {},
    () => {},
    () => {},
    () => {},
    () => {},
  ],
];
function check_pos() {
  positions[pos[0]][pos[1]]();
  positions[pos[0]][pos[1]] = () => {};
}
function placeOnMap() {
  table.rows[pos[0]].cells[pos[1]].id = "current_position";
}

window.addEventListener("keydown", (key) => {
  switch (key.key) {
    case "ArrowUp":
    case "w":
      if (
        pos[0] > 0 &&
        !document.getElementById("map").classList.contains("hide_map")
      ) {
        table.rows[pos[0]].cells[pos[1]].id = "";
        pos[0] -= 1;
        table.rows[pos[0]].cells[pos[1]].id = "current_position";
        check_pos();
      }
      break;
    case "ArrowDown":
    case "s":
      if (
        pos[0] < 3 &&
        !document.getElementById("map").classList.contains("hide_map")
      ) {
        table.rows[pos[0]].cells[pos[1]].id = "";
        pos[0] += 1;
        table.rows[pos[0]].cells[pos[1]].id = "current_position";
        check_pos();
      }
      break;
    case "ArrowLeft":
    case "a":
      if (
        pos[1] > 0 &&
        !document.getElementById("map").classList.contains("hide_map")
      ) {
        table.rows[pos[0]].cells[pos[1]].id = "";
        pos[1] -= 1;
        table.rows[pos[0]].cells[pos[1]].id = "current_position";
        check_pos();
      }
      break;
    case "ArrowRight":
    case "d":
      if (
        pos[1] < 7 &&
        !document.getElementById("map").classList.contains("hide_map")
      ) {
        table.rows[pos[0]].cells[pos[1]].id = "";
        pos[1] += 1;
        table.rows[pos[0]].cells[pos[1]].id = "current_position";
        check_pos();
      }
      break;

    default:
      break;
  }
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
placeOnMap();
