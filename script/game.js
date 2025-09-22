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
async function getCharacters() {
  const arg = await fetch("http://localhost:3000/chars", {});
}

window.addEventListener("DOMContentLoaded", fetchUserProfile);

const aragorn_health = document.getElementById("aragorn_health");
const sam_health = document.getElementById("sam_health");
const legolas_health = document.getElementById("legolas_health");
const gimli_health = document.getElementById("gimli_health");
const boromir_health = document.getElementById("boromir_health");
const gandalf_health = document.getElementById("gandalf_health");
const enemy_health = document.getElementById("enemy_health");
const character_health = document.getElementById("character_health");
const character_combat = document.getElementById("character_combat");
const character_level = document.getElementById("character_level");
const character_name = document.getElementById("character_name");

const table = document.getElementById("table");

const style = document.documentElement.style;

function sam_percentage(x) {
  style.setProperty("--sam-health", x);
}
function sam_reduce_health() {
  check = current_enemy.baseDamage - sam.defense;
  if (check > 0) {
    if (sam.health > 0 && sam.health - check > 0) {
      sam.health -= check;
      sam_health.innerHTML = `${sam.health}/${sam.totalHealth}`;
      sam_percentage(`${(sam.health / sam.totalHealth) * 100}%`);
      character_health.innerHTML = `${sam.health}/${sam.totalHealth}`;
      character_health.className = "health sam_health";
    } else if (sam.health - check <= 0) {
      sam_health.innerHTML = `0/${sam.totalHealth}`;
      sam_percentage("0%");
    }
  }
}

function aragorn_percentage(x) {
  style.setProperty("--aragorn-health", x);
}
function aragorn_reduce_health() {
  check = current_enemy.baseDamage - aragorn.defense;
  if (check > 0) {
    if (aragorn.health > 0 && aragorn.health - check > 0) {
      aragorn.health -= check;
      aragorn_health.innerHTML = `${aragorn.health}/${aragorn.totalHealth}`;
      aragorn_percentage(`${(aragorn.health / aragorn.totalHealth) * 100}%`);
      character_health.innerHTML = `${aragorn.health} / ${aragorn.totalHealth}`;
      character_health.className = "health aragorn_health";
    } else if (aragorn.health - check <= 0) {
      aragorn_health.innerHTML = `0/${aragorn.totalHealth}`;
      aragorn_percentage("0%");
    }
  }
}

function legolas_percentage(x) {
  style.setProperty("--legolas-health", x);
}
function legolas_reduce_health() {
  check = current_enemy.baseDamage - legolas.defense;
  if (check > 0) {
    if (legolas.health > 0 && legolas.health - check > 0) {
      legolas.health -= check;
      legolas_health.innerHTML = `${legolas.health}/${legolas.totalHealth}`;
      legolas_percentage(`${(legolas.health / legolas.totalHealth) * 100}%`);
      character_health.innerHTML = `${legolas.health} / ${legolas.totalHealth}`;
      character_health.className = "health legolas_health";
    } else if (legolas.health - check <= 0) {
      legolas_health.innerHTML = `0/${legolas.totalHealth}`;
      legolas_percentage("0%");
    }
  }
}

function gimli_percentage(x) {
  style.setProperty("--gimli-health", x);
}
function gimli_reduce_health() {
  check = current_enemy.baseDamage - gimli.defense;
  if (check > 0) {
    if (gimli.health > 0 && gimli.health - check > 0) {
      gimli.health -= check;
      gimli_health.innerHTML = `${gimli.health}/${gimli.totalHealth}`;
      gimli_percentage(`${(gimli.health / gimli.totalHealth) * 100}%`);
      character_health.innerHTML = `${gimli.health} / ${gimli.totalHealth}`;
      character_health.className = "health gimli_health";
    } else if (gimli.health - check <= 0) {
      gimli_health.innerHTML = `0/${gimli.totalHealth}`;
      gimli_percentage("0%");
    }
  }
}

function boromir_percentage(x) {
  style.setProperty("--boromir-health", x);
}
function boromir_reduce_health() {
  let [healthx, healthy] = boromir_health.innerHTML.split("/");
  check = current_enemy.baseDamage - boromir.defense;
  if (check > 0) {
    if (healthx > 0 && healthx - check > 0) {
      healthx -= check;
      boromir_health.innerHTML = `${healthx}/${healthy}`;
      boromir_percentage(`${(healthx / healthy) * 100}%`);
      character_health.innerHTML = `${healthx} / ${healthy}`;
      character_health.className = "health boromir_health";
    } else if (healthx - check <= 0) {
      boromir_health.innerHTML = `0/${healthy}`;
      boromir_percentage("0%");
    }
  }
}

function gandalf_percentage(x) {
  style.setProperty("--gandalf-health", x);
}
function gandalf_reduce_health() {
  check = current_enemy.baseDamage - gandalf.defense;
  if (check > 0) {
    if (gandalf.health > 0 && gandalf.health - check > 0) {
      gandalf.health -= check;
      gandalf_health.innerHTML = `${gandalf.health}/${gandalf.totalHealth}`;
      gandalf_percentage(`${(gandalf.health / gandalf.totalHealth) * 100}%`);
      character_health.innerHTML = `${gandalf.health} / ${gandalf.totalHealth}`;
      character_health.className = "health gandalf_health";
    } else if (gandalf.health - check <= 0) {
      gandalf_health.innerHTML = `0/${gandalf.totalHealth}`;
      gandalf_percentage("0%");
    }
  }
}

function enemy_percentage(x) {
  style.setProperty("--enemy-health", x);
}
function enemy_reduce_health(attacker) {
  check = attacker.baseDamage - current_enemy.defense;
  if (check > 0) {
    if (current_enemy.health - check > 0) {
      current_enemy.health -= check;
      enemy_health.innerHTML = `${current_enemy.health} / ${current_enemy.totalHealth}`;
      enemy_percentage(
        `${(current_enemy.health / current_enemy.totalHealth) * 100}%`
      );
    } else if (current_enemy.health - check <= 0) {
      enemy_health.innerHTML = `0/${current_enemy.totalHealth}`;
      enemy_percentage("0%");
    }
  }
}

const current_enemy = {
  level: 1,
  nome: "",
  baseDamage: 1,
  defense: 0,
  magicRes: 0,
  health: 10,
  totalHealth: 10,
  effects: [],
};
const sam = {
  level: 1,
  nome: "Samwise",
  baseDamage: 1,
  defense: 0,
  magicRes: 0,
  health: 5,
  totalHealth: 6,
  effects: [],
};
const aragorn = {
  level: 1,
  nome: "Aragorn",
  baseDamage: 1,
  defense: 0,
  magicRes: 0,
  health: 6,
  totalHealth: 7,
  effects: [],
};
const legolas = {
  level: 1,
  nome: "Legolas",
  baseDamage: 1,
  defense: 0,
  magicRes: 0,
  health: 7,
  totalHealth: 8,
  effects: [],
};
const gimli = {
  level: 1,
  nome: "Gimli",
  baseDamage: 1,
  defense: 0,
  magicRes: 0,
  health: 8,
  totalHealth: 9,
  effects: [],
};
const boromir = {
  level: 1,
  nome: "Boromir",
  baseDamage: 1,
  defense: 0,
  magicRes: 0,
  health: 9,
  totalHealth: 10,
  effects: [],
};
const gandalf = {
  level: 1,
  nome: "Gandalf",
  baseDamage: 1,
  defense: 0,
  magicRes: 0,
  health: 10,
  totalHealth: 11,
  effects: [],
};

document.getElementById("frodo").addEventListener("click", () => {
  document.getElementById("characters").classList.toggle("active");
});

//clique para adicionar personagem ao combate/lista
{
  document.getElementById("sam").addEventListener("click", () => {
    character_combat.className = "combat_sam";
    character_name.innerHTML = "Sam";
    character_health.className = "health sam_health";
    character_level.innerHTML = `LVL ${sam.level}`;
    character_health.innerHTML = `${sam.health} / ${sam.totalHealth}`;
  });

  document.getElementById("show_aragorn").addEventListener("click", () => {
    document.getElementById("aragorn").classList.toggle("active");
  });
  document.getElementById("aragorn").addEventListener("click", () => {
    character_combat.className = "combat_aragorn";
    character_name.innerText = "Aragorn";
    character_health.className = "health aragorn_health";
    character_level.innerHTML = `LVL ${aragorn.level}`;
    character_health.innerHTML = `${aragorn.health} / ${aragorn.totalHealth}`;
  });

  document.getElementById("show_legolas").addEventListener("click", () => {
    document.getElementById("legolas").classList.toggle("active");
  });
  document.getElementById("legolas").addEventListener("click", () => {
    character_combat.className = "combat_legolas";
    character_name.innerHTML = "Legolas";
    character_health.className = "health legolas_health";
    character_level.innerHTML = `LVL ${legolas.level}`;
    character_health.innerHTML = `${legolas.health} / ${legolas.totalHealth}`;
  });

  document.getElementById("show_gimli").addEventListener("click", () => {
    document.getElementById("gimli").classList.toggle("active");
  });
  document.getElementById("gimli").addEventListener("click", () => {
    character_combat.className = "combat_gimli";
    character_name.innerHTML = "Gimli";
    character_health.className = "health gimli_health";
    character_level.innerHTML = `LVL ${gimli.level}`;
    character_health.innerHTML = `${gimli.health} / ${gimli.totalHealth}`;
  });

  document.getElementById("show_boromir").addEventListener("click", () => {
    document.getElementById("boromir").classList.toggle("active");
  });
  document.getElementById("boromir").addEventListener("click", () => {
    character_combat.className = "combat_boromir";
    character_name.innerHTML = "Boromir";
    character_health.className = "health boromir_health";
    character_level.innerHTML = `LVL ${boromir.level}`;
    character_health.innerHTML = `${boromir.health} / ${boromir.totalHealth}`;
  });

  document.getElementById("show_gandalf").addEventListener("click", () => {
    document.getElementById("gandalf").classList.toggle("active");
  });
  document.getElementById("gandalf").addEventListener("click", () => {
    character_combat.className = "combat_gandalf";
    character_name.innerHTML = "Gandalf";
    character_health.className = "health gandalf_health";
    character_level.innerHTML = `LVL ${gandalf.level}`;
    character_health.innerHTML = `${gandalf.health} / ${gandalf.totalHealth}`;
  });
}

document.getElementById("bomb").addEventListener("click", () => {
  document.getElementById("map").classList.toggle("hide_map");
  document.getElementById("combat").classList.toggle("show_combat");
});
pos = [0, 0];
positions = [
  [
    () => {},
    () => {},
    () => {
      document.getElementById("gandalf").classList.toggle("active");
    },
    () => {},
    () => {
      document.getElementById("aragorn").classList.toggle("active");
    },
  ],
  [
    () => {},
    () => {},
    () => {
      document.getElementById("legolas").classList.toggle("active");
    },
    () => {},
    () => {
      document.getElementById("gimli").classList.toggle("active");
    },
  ],
  [
    () => {},
    () => {},
    () => {
      document.getElementById("boromir").classList.toggle("active");
    },
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
    case " ":
      if (
        pos[1] < 4 &&
        !document.getElementById("map").classList.contains("hide_map")
      ) {
        table.rows[pos[0]].cells[pos[1]].id = "";
        pos[1] += 1;
        table.rows[pos[0]].cells[pos[1]].id = "current_position";
        check_pos();
      }else if(){}
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
loadHealth();
