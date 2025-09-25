async function fetchUserProfile() {
  const token = localStorage.getItem("token");
  if (!token) {
    window.location.href = "login.html?alert=true";
    return;
  }
  try {
    const resposta = await fetch("http://localhost:3000/users/me", {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });
    if (!resposta.ok) {
      const erro = await resposta.text();
      throw new Error(erro);
    } else {
      getSave();
    }
  } catch (erro) {
    window.location.href = "login.html?alert=true";
  }
}
//pega status de personagens do banco
async function getCharacters() {
  try {
    const characters = await fetch("http://localhost:3000/chars/all");
    const char_list = await characters.json();
    char_list.forEach((character, index) => {
      charList[index].name = character.name;
      charList[index].baseDamage = character.baseDamage;
      charList[index].defense = character.defense;
      charList[index].health = character.health;
      charList[index].totalHealth = character.totalHealth;
      if (index >= 6) {
        charList[index].level = index - 5;
      } else {
        charList[index].level = 1;
      }
    });
    loadCharacters();
  } catch (e) {
    console.error(e);
    alert("Erro:" + e);
  }
}

async function getSave() {
  try {
    let token = localStorage.getItem("token");
    const save = await fetch("http://localhost:3000/saves/me", {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });

    if (!save.ok) {
      getCharacters();

      await fetch("http://localhost:3000/save/me", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      });
    } else {
      save = save.json();

      sam.health = save.mainHealth;
      sam.level = save.mainLevel;
      hasAra = save.hasAra || false;
      aragorn.health = save.araHealth;
      aragorn.level = save.araLevel;
      hasLego = save.hasLego || false;
      legolas.health = save.legoHealth;
      legolas.level = save.legoLevel;
      hasGiml = save.hasGiml || false;
      gimli.health = save.gimlHealth;
      gimli.level = save.gimlLevel;
      hasBoro = save.hasBoro || false;
      boromir.health = save.boroHealth;
      boromir.level = save.boroLevel;
      hasGandal = save.hasGandal || false;
      gandalf.health = save.gandalHealth;
      gandalf.level = save.gandalLevel;
      pos = [save.tileLocalX || 0, save.tileLocalY || 0];
      potions = save.items || 1;
      won = save.won || false;

      potion_number.innerHTML = potions;
      removeFromMap();
      placeOnMap();
      loadCharacters();
    }
  } catch (e) {
    console.error(e);
  }
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
const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
const line3 = document.getElementById("line3");
const line4 = document.getElementById("line4");
const line5 = document.getElementById("line5");
const line6 = document.getElementById("line6");
const line7 = document.getElementById("line7");
const style = document.documentElement.style;
const potion_number = document.getElementById("potion_number");
let potions = 1;
let drink = false;
let change = false;
let first = false;
let hasSam = true;
let hasAra = false;
let hasGiml = false;
let hasLego = false;
let hasBoro = false;
let hasGandal = false;
let won = false;

//status de personagens
let sam = {
  level: 1,
  name: "Samwise",
  baseDamage: 1,
  defense: 0,
  magicRes: 0,
  health: 5,
  totalHealth: 6,
  effects: [],
};
let aragorn = {
  level: 1,
  name: "Aragorn",
  baseDamage: 1,
  defense: 0,
  magicRes: 0,
  health: 6,
  totalHealth: 7,
  effects: [],
};
let legolas = {
  level: 1,
  name: "Legolas",
  baseDamage: 1,
  defense: 0,
  magicRes: 0,
  health: 7,
  totalHealth: 8,
  effects: [],
};
let gimli = {
  level: 1,
  name: "Gimli",
  baseDamage: 1,
  defense: 0,
  magicRes: 0,
  health: 8,
  totalHealth: 9,
  effects: [],
};
let boromir = {
  level: 1,
  name: "Boromir",
  baseDamage: 1,
  defense: 0,
  magicRes: 0,
  health: 9,
  totalHealth: 10,
  effects: [],
};
let gandalf = {
  level: 1,
  name: "Gandalf",
  baseDamage: 1,
  defense: 0,
  magicRes: 0,
  health: 10,
  totalHealth: 11,
  effects: [],
};

//status de iinimigos
let current_enemy = {
  level: 1,
  name: "",
  baseDamage: 1,
  defense: 0,
  magicRes: 0,
  health: 10,
  totalHealth: 10,
  effects: [],
};
let uruk = {
  level: 1,
  name: "Uruk",
  baseDamage: 1,
  defense: 0,
  magicRes: 0,
  health: 1,
  totalHealth: 10,
  effects: [],
};
let nazgul = {
  level: 2,
  name: "Nazgul",
  baseDamage: 1,
  defense: 0,
  magicRes: 0,
  health: 2,
  totalHealth: 10,
  effects: [],
};
let balrog = {
  level: 3,
  name: "balrog",
  baseDamage: 1,
  defense: 0,
  magicRes: 0,
  health: 3,
  totalHealth: 10,
  effects: [],
};
let saruman = {
  level: 4,
  name: "Saruman",
  baseDamage: 1,
  defense: 0,
  magicRes: 0,
  health: 4,
  totalHealth: 10,
  effects: [],
};
let shelob = {
  level: 5,
  name: "Shelob",
  baseDamage: 1,
  defense: 0,
  magicRes: 0,
  health: 5,
  totalHealth: 10,
  effects: [],
};
let smeagol = {
  level: 6,
  name: "Smeagol",
  baseDamage: 1,
  defense: 0,
  magicRes: 0,
  health: 6,
  totalHealth: 10,
  effects: [],
};
let sauron = {
  level: 7,
  name: "Sauron",
  baseDamage: 1,
  defense: 0,
  magicRes: 0,
  health: 70,
  totalHealth: 100,
  effects: [],
};

const charList = [
  sam,
  aragorn,
  legolas,
  gimli,
  boromir,
  gandalf,
  uruk,
  nazgul,
  balrog,
  saruman,
  shelob,
  smeagol,
  sauron,
];

//posição do frodo
let pos = [0, 0];

//matrix de funções a serem chamadas em tiles
let positions = [
  [
    () => {},
    () => {
      start_combat(uruk);
      enemy_image("combat_uruk");
    },
    async () => {
      try {
        await fetch("http://localhost:3000/save/me/char", {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token"),
          },
          body: JSON.stringify({ charId: 6 }),
        });

        document.getElementById("gandalf").classList.add("active");
        hasGandal = true;
      } catch (e) {
        alert(e);
      }
    },
    () => {
      start_combat(nazgul);
      enemy_image("combat_nazgul");
    },
    async () => {
      try {
        await fetch("http://localhost:3000/save/me/char", {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token"),
          },
          body: JSON.stringify({ charId: 2 }),
        });

        document.getElementById("aragorn").classList.add("active");
        hasAra = true;
      } catch (e) {
        alert(e);
      }
    },
  ],
  [
    async () => {
      try {
        await fetch("http://localhost:3000/save/me/item", {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token"),
          },
          body: JSON.stringify({ potions: potions }),
        });

        potions++;
        potion_number.innerHTML = potions;
      } catch (e) {
        alert(e);
      }
    },
    () => {
      start_combat(balrog);
      enemy_image("combat_balrog");
    },
    async () => {
      try {
        await fetch("http://localhost:3000/save/me/char", {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token"),
          },
          body: JSON.stringify({ charId: 3 }),
        });

        document.getElementById("legolas").classList.add("active");
        hasLego = true;
      } catch (e) {
        alert(e);
      }
    },
    () => {
      start_combat(saruman);
      enemy_image("combat_saruman");
    },
    async () => {
      try {
        await fetch("http://localhost:3000/save/me/char", {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token"),
          },
          body: JSON.stringify({ charId: 4 }),
        });

        document.getElementById("gimli").classList.add("active");
        hasGiml = true;
      } catch (e) {
        alert(e);
      }
    },
  ],
  [
    async () => {
      try {
        await fetch("http://localhost:3000/save/me/item", {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token"),
          },
          body: JSON.stringify({ potions: potions }),
        });

        potions++;
        potion_number.innerHTML = potions;
      } catch (e) {
        alert(e);
      }
    },
    () => {
      start_combat(shelob);
      enemy_image("combat_shelob");
    },
    async () => {
      try {
        await fetch("http://localhost:3000/save/me/char", {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token"),
          },
          body: JSON.stringify({ charId: 5 }),
        });

        document.getElementById("boromir").classList.add("active");
        hasBoro = true;
      } catch (e) {
        alert(e);
      }
    },
    () => {
      start_combat(smeagol);
      enemy_image("combat_smeagol");
    },
    () => {
      start_combat(sauron);
      enemy_image("combat_sauron");
    },
  ],
];

//funções para dano e mostrar vida
function sam_percentage(x) {
  style.setProperty("--sam-health", x);
}
async function sam_reduce_health() {
  if (!drink && !change) {
    await enemy_reduce_health(sam);
  }

  if (current_enemy.health > 0) {
    check = current_enemy.baseDamage - sam.defense;
    if (check > 0) {
      if (sam.health > 0 && sam.health - check > 0) {
        sam.health -= check;
        sam_health.innerHTML = `${sam.health}/${sam.totalHealth}`;
        sam_percentage(`${(sam.health / sam.totalHealth) * 100}%`);
        character_health.innerHTML = `${sam.health} / ${sam.totalHealth}`;
        character_health.className = "health sam_health";
        message(
          `${current_enemy.name} deals ${check} damage to ${character_name.innerText}`
        );
      } else if (sam.health - check <= 0) {
        character_health.innerHTML = `0 / 0`;
        character_health.className = "health sam_health";
        sam_health.innerHTML = `0/${sam.totalHealth}`;
        sam_percentage("0%");
        message(`${current_enemy.name} kills ${character_name.innerText}`);
        document.getElementById("sam").classList.remove("active");
        death();
        hasSam = false;
      }
    }
  }
}

function aragorn_percentage(x) {
  style.setProperty("--aragorn-health", x);
}
async function aragorn_reduce_health() {
  if (!drink && !change) {
    await enemy_reduce_health(aragorn);
  }

  if (current_enemy.health > 0) {
    check = current_enemy.baseDamage - aragorn.defense;
    if (check > 0) {
      if (aragorn.health > 0 && aragorn.health - check > 0) {
        aragorn.health -= check;
        aragorn_health.innerHTML = `${aragorn.health}/${aragorn.totalHealth}`;
        aragorn_percentage(`${(aragorn.health / aragorn.totalHealth) * 100}%`);
        character_health.innerHTML = `${aragorn.health} / ${aragorn.totalHealth}`;
        character_health.className = "health aragorn_health";
        message(
          `${current_enemy.name} deals ${check} damage to ${character_name.innerText}`
        );
      } else if (aragorn.health - check <= 0) {
        character_health.innerHTML = `0 / 0`;
        character_health.className = "health aragorn_health";
        aragorn_health.innerHTML = `0/${aragorn.totalHealth}`;
        aragorn_percentage("0%");
        message(`${current_enemy.name} kills ${character_name.innerText}`);
        document.getElementById("aragorn").classList.remove("active");
        death();
        hasAra = false;
      }
    }
  }
}

function legolas_percentage(x) {
  style.setProperty("--legolas-health", x);
}
async function legolas_reduce_health() {
  if (!drink && !change) {
    await enemy_reduce_health(legolas);
  }

  if (current_enemy.health > 0) {
    check = current_enemy.baseDamage - legolas.defense;
    if (check > 0) {
      if (legolas.health > 0 && legolas.health - check > 0) {
        legolas.health -= check;
        legolas_health.innerHTML = `${legolas.health}/${legolas.totalHealth}`;
        legolas_percentage(`${(legolas.health / legolas.totalHealth) * 100}%`);
        character_health.innerHTML = `${legolas.health} / ${legolas.totalHealth}`;
        character_health.className = "health legolas_health";
        message(
          `${current_enemy.name} deals ${check} damage to ${character_name.innerText}`
        );
      } else if (legolas.health - check <= 0) {
        character_health.innerHTML = `0 / 0`;
        character_health.className = "health legolas_health";
        legolas_health.innerHTML = `0/${legolas.totalHealth}`;
        legolas_percentage("0%");
        message(`${current_enemy.name} kills ${character_name.innerText}`);
        document.getElementById("legolas").classList.remove("active");
        death();
        hasLego = false;
      }
    }
  }
}

function gimli_percentage(x) {
  style.setProperty("--gimli-health", x);
}
async function gimli_reduce_health() {
  if (!drink && !change) {
    await enemy_reduce_health(gimli);
  }

  if (current_enemy.health > 0) {
    check = current_enemy.baseDamage - gimli.defense;
    if (check > 0) {
      if (gimli.health > 0 && gimli.health - check > 0) {
        gimli.health -= check;
        gimli_health.innerHTML = `${gimli.health}/${gimli.totalHealth}`;
        gimli_percentage(`${(gimli.health / gimli.totalHealth) * 100}%`);
        character_health.innerHTML = `${gimli.health} / ${gimli.totalHealth}`;
        character_health.className = "health gimli_health";
        message(
          `${current_enemy.name} deals ${check} damage to ${character_name.innerText}`
        );
      } else if (gimli.health - check <= 0) {
        character_health.innerHTML = `0 / 0`;
        character_health.className = "health gimli_health";
        gimli_health.innerHTML = `0/${gimli.totalHealth}`;
        gimli_percentage("0%");
        message(`${current_enemy.name} kills ${character_name.innerText}`);
        document.getElementById("gimli").classList.remove("active");
        death();
        hasGiml = false;
      }
    }
  }
}

function boromir_percentage(x) {
  style.setProperty("--boromir-health", x);
}
async function boromir_reduce_health() {
  if (!drink && !change) {
    await enemy_reduce_health(boromir);
  }

  if (current_enemy.health > 0) {
    check = current_enemy.baseDamage - boromir.defense;
    if (check > 0) {
      if (boromir.health > 0 && boromir.health - check > 0) {
        boromir.health -= check;
        boromir_health.innerHTML = `${boromir.health}/${boromir.totalHealth}`;
        boromir_percentage(`${(boromir.health / boromir.totalHealth) * 100}%`);
        character_health.innerHTML = `${boromir.health} / ${boromir.totalHealth}`;
        character_health.className = "health boromir_health";
        message(
          `${current_enemy.name} deals ${check} damage to ${character_name.innerText}`
        );
      } else if (boromir.health - check <= 0) {
        character_health.innerHTML = `0 / 0`;
        character_health.className = "health boromir_health";
        boromir_health.innerHTML = `0/${boromir.totalHealth}`;
        boromir_percentage("0%");
        message(`${current_enemy.name} kills ${character_name.innerText}`);
        document.getElementById("boromir").classList.remove("active");
        death();
        hasBoro = false;
      }
    }
  }
}

function gandalf_percentage(x) {
  style.setProperty("--gandalf-health", x);
}
async function gandalf_reduce_health() {
  if (!drink && !change) {
    if (current_enemy.name == balrog.name) {
      current_enemy.health = 0;
      enemy_health.innerHTML = `0/${current_enemy.totalHealth}`;
      enemy_percentage("0%");

      gandalf.health = 0;
      gandalf_health.innerHTML = `0/${gandalf.totalHealth}`;
      gandalf_percentage("0%");
      character_health.innerHTML = `0 / 0`;

      message("Fly, you fools!");
      document.getElementById("gandalf").classList.remove("active");
      death();
      hasGandal = false;
      await SendSave();
      return;
    }

    await enemy_reduce_health(gandalf);
  }

  if (current_enemy.health > 0) {
    check = current_enemy.baseDamage - gandalf.defense;
    if (check > 0) {
      if (gandalf.health > 0 && gandalf.health - check > 0) {
        gandalf.health -= check;
        gandalf_health.innerHTML = `${gandalf.health}/${gandalf.totalHealth}`;
        gandalf_percentage(`${(gandalf.health / gandalf.totalHealth) * 100}%`);
        character_health.innerHTML = `${gandalf.health} / ${gandalf.totalHealth}`;
        character_health.className = "health gandalf_health";
        message(
          `${current_enemy.name} deals ${check} damage to ${character_name.innerText}`
        );
      } else if (gandalf.health - check <= 0) {
        gandalf.health = 0;
        character_health.innerHTML = `0 / 0`;
        character_health.className = "health gandalf_health";
        gandalf_health.innerHTML = `0/${gandalf.totalHealth}`;
        gandalf_percentage("0%");
        message(`${current_enemy.name} kills ${character_name.innerText}`);
        document.getElementById("gandalf").classList.remove("active");
      }
    }
  }
}

function enemy_percentage(x) {
  style.setProperty("--enemy-health", x);
}
async function enemy_reduce_health(attacker) {
  check = attacker.baseDamage - current_enemy.defense;
  if (check > 0) {
    if (current_enemy.health - check > 0) {
      current_enemy.health -= check;
      enemy_health.innerHTML = `${current_enemy.health} / ${current_enemy.totalHealth}`;
      enemy_percentage(
        `${(current_enemy.health / current_enemy.totalHealth) * 100}%`
      );
      message(
        `${attacker.name} deals ${check} damage to ${current_enemy.name}`
      );
    } else if (current_enemy.health - check <= 0) {
      current_enemy.health = 0;
      enemy_health.innerHTML = `0/${current_enemy.totalHealth}`;
      enemy_percentage("0%");
      message(`${attacker.name} kills ${current_enemy.name}`);
      if (current_enemy.name == sauron.name) {
        won = true;
        await SendSave();
      } else {
        await SendSave();
      }
    }
  }
}

//seta imagem do inimigo
function enemy_image(x) {
  document.getElementById("enemy_combat").className = x;
}
//muda para a tela de combate
function start_combat(enemy) {
  document.getElementById("map").classList.toggle("hide_map");
  document.getElementById("combat").classList.toggle("show_combat");
  current_enemy = enemy;
  document.getElementById("enemy_name").innerHTML = current_enemy.name;
  document.getElementById(
    "enemy_health"
  ).innerHTML = `${current_enemy.health} / ${current_enemy.totalHealth}`;
  document.getElementById("enemy_level").innerHTML = current_enemy.level;
  enemy_percentage(
    `${(current_enemy.health / current_enemy.totalHealth) * 100}%`
  );
  change = true;
  character_combat.className = "";
  character_name.innerHTML = "";
  character_health.className = "health";
  character_level.innerHTML = `LVL `;
  character_health.innerHTML = ` / `;
  message("choose a fighter");
  first = true;
}
//função para quando um personagem morre
function death() {
  change = true;
  character_combat.className = "";
  character_name.innerHTML = "";
  character_health.className = "health";
  character_level.innerHTML = `LVL `;
  character_health.innerHTML = ` / `;
  message("choose a fighter");
}
//chama a função da posição atual, e depois remove ela
function check_pos() {
  positions[pos[0]][pos[1]]();
  positions[pos[0]][pos[1]] = () => {};
}
//posiciona frodo
function placeOnMap() {
  table.rows[pos[0]].cells[pos[1]].id = "current_position";
}
function removeFromMap() {
  for (let i = 0; i < pos[0]; i++) {
    for (let j = 0; j < table.rows[pos[0]].cells.length; j++) {
      table.rows[i].cells[j].id = "";
    }
  }
  for (let i = 0; i < pos[1]; i++) {
    table.rows[pos[0]].cells[i].id = "";
  }
  table.rows[pos[0]].cells[pos[1]].id = "";
}
//seta valor de vida dos personagens
function loadCharacters() {
  if (sam.health <= 0) {
    document.getElementById("sam").classList.remove("active");
  }
  sam_health.innerHTML = `${sam.health}/${sam.totalHealth}`;
  sam_percentage(`${(sam.health / sam.totalHealth) * 100}%`);

  if (hasAra && aragorn.health > 0) {
    document.getElementById("aragorn").classList.add("active");
  }
  aragorn_health.innerHTML = `${aragorn.health}/${aragorn.totalHealth}`;
  aragorn_percentage(`${(aragorn.health / aragorn.totalHealth) * 100}%`);

  if (hasGiml && gimli.health > 0) {
    document.getElementById("gimli").classList.add("active");
  }
  gimli_health.innerHTML = `${gimli.health}/${gimli.totalHealth}`;
  gimli_percentage(`${(gimli.health / gimli.totalHealth) * 100}%`);

  if (hasLego && legolas.health > 0) {
    document.getElementById("legolas").classList.add("active");
  }
  legolas_health.innerHTML = `${legolas.health}/${legolas.totalHealth}`;
  legolas_percentage(`${(legolas.health / legolas.totalHealth) * 100}%`);

  if (hasBoro && boromir.health > 0) {
    document.getElementById("boromir").classList.add("active");
  }
  boromir_health.innerHTML = `${boromir.health}/${boromir.totalHealth}`;
  boromir_percentage(`${(boromir.health / boromir.totalHealth) * 100}%`);

  if (hasGandal && gandalf.health > 0) {
    document.getElementById("gandalf").classList.add("active");
  }
  gandalf_health.innerHTML = `${gandalf.health}/${gandalf.totalHealth}`;
  gandalf_percentage(`${(gandalf.health / gandalf.totalHealth) * 100}%`);
}
//ataque
function fight() {
  drink = false;
  if (!first) {
    change = false;
  }
  let p1 = document.getElementById("character_combat").className.split("_")[1];
  switch (p1) {
    case "sam":
      if (sam.health > 0 && current_enemy.health > 0) sam_reduce_health();
      break;
    case "aragorn":
      if (aragorn.health > 0 && current_enemy.health > 0)
        aragorn_reduce_health();
      break;

    case "legolas":
      if (legolas.health > 0 && current_enemy.health > 0)
        legolas_reduce_health();
      break;

    case "gimli":
      if (gimli.health > 0 && current_enemy.health > 0) gimli_reduce_health();
      break;

    case "boromir":
      if (boromir.health > 0 && current_enemy.health > 0)
        boromir_reduce_health();
      break;

    case "gandalf":
      if (gandalf.health > 0 && current_enemy.health > 0)
        gandalf_reduce_health();
      break;

    default:
      break;
  }
  if (current_enemy.health == 0) {
    document.getElementById("map").classList.toggle("hide_map");
    document.getElementById("combat").classList.toggle("show_combat");
  }
}
//clique para adicionar personagem ao combate ou tomar poção
{
  document.getElementById("sam").addEventListener("click", () => {
    if (change) {
      change = false;
      character_combat.className = "combat_sam";
      character_name.innerHTML = "Sam";
      character_health.className = "health sam_health";
      character_level.innerHTML = `LVL ${sam.level}`;
      character_health.innerHTML = `${sam.health} / ${sam.totalHealth}`;
      if (!first) {
        sam_reduce_health();
      }
    } else if (drink) {
      drink = false;

      sam.health = sam.totalHealth;
      sam_health.innerHTML = `${sam.health}/${sam.totalHealth}`;
      sam_percentage("100%");
      if ((character_combat.className = "combat_sam")) {
        character_health.innerHTML = `${sam.health} / ${sam.totalHealth}`;
      }

      potions--;
      potion_number.innerHTML = potions;
    }
  });

  document.getElementById("aragorn").addEventListener("click", () => {
    if (change) {
      change = false;
      character_combat.className = "combat_aragorn";
      character_name.innerText = "Aragorn";
      character_health.className = "health aragorn_health";
      character_level.innerHTML = `LVL ${aragorn.level}`;
      character_health.innerHTML = `${aragorn.health} / ${aragorn.totalHealth}`;
      if (!first) {
        aragorn_reduce_health();
      }
    } else if (drink) {
      drink = false;

      aragorn.health = aragorn.totalHealth;
      aragorn_health.innerHTML = `${aragorn.health}/${aragorn.totalHealth}`;
      aragorn_percentage("100%");
      if ((character_combat.className = "combat_aragorn")) {
        character_health.innerHTML = `${aragorn.health} / ${aragorn.totalHealth}`;
      }
      potions--;
      potion_number.innerHTML = potions;
    }
  });

  document.getElementById("legolas").addEventListener("click", () => {
    if (change) {
      change = false;
      character_combat.className = "combat_legolas";
      character_name.innerHTML = "Legolas";
      character_health.className = "health legolas_health";
      character_level.innerHTML = `LVL ${legolas.level}`;
      character_health.innerHTML = `${legolas.health} / ${legolas.totalHealth}`;
      if (!first) {
        legolas_reduce_health();
      }
    } else if (drink) {
      drink = false;

      legolas.health = legolas.totalHealth;
      legolas_health.innerHTML = `${legolas.health}/${legolas.totalHealth}`;
      legolas_percentage("100%");
      if ((character_combat.className = "combat_legolas")) {
        character_health.innerHTML = `${legolas.health} / ${legolas.totalHealth}`;
      }
      potions--;
      potion_number.innerHTML = potions;
    }
  });

  document.getElementById("gimli").addEventListener("click", () => {
    if (change) {
      change = false;
      character_combat.className = "combat_gimli";
      character_name.innerHTML = "Gimli";
      character_health.className = "health gimli_health";
      character_level.innerHTML = `LVL ${gimli.level}`;
      character_health.innerHTML = `${gimli.health} / ${gimli.totalHealth}`;
      if (!first) {
        gimli_reduce_health();
      }
    } else if (drink) {
      drink = false;

      gimli.health = gimli.totalHealth;
      gimli_health.innerHTML = `${gimli.health}/${gimli.totalHealth}`;
      gimli_percentage("100%");
      if ((character_combat.className = "combat_gimli")) {
        character_health.innerHTML = `${gimli.health} / ${gimli.totalHealth}`;
      }
      potions--;
      potion_number.innerHTML = potions;
    }
  });

  document.getElementById("boromir").addEventListener("click", () => {
    if (change) {
      change = false;
      character_combat.className = "combat_boromir";
      character_name.innerHTML = "Boromir";
      character_health.className = "health boromir_health";
      character_level.innerHTML = `LVL ${boromir.level}`;
      character_health.innerHTML = `${boromir.health} / ${boromir.totalHealth}`;
      if (!first) {
        boromir_reduce_health();
      }
    } else if (drink) {
      drink = false;

      boromir.health = boromir.totalHealth;
      boromir_health.innerHTML = `${boromir.health}/${boromir.totalHealth}`;
      boromir_percentage("100%");
      if ((character_combat.className = "combat_boromir")) {
        character_health.innerHTML = `${boromir.health} / ${boromir.totalHealth}`;
      }
      potions--;
      potion_number.innerHTML = potions;
    }
  });

  document.getElementById("gandalf").addEventListener("click", () => {
    if (change) {
      change = false;
      character_combat.className = "combat_gandalf";
      character_name.innerHTML = "Gandalf";
      character_health.className = "health gandalf_health";
      character_level.innerHTML = `LVL ${gandalf.level}`;
      character_health.innerHTML = `${gandalf.health} / ${gandalf.totalHealth}`;
      if (!first) {
        gandalf_reduce_health();
      }
    } else if (drink) {
      drink = false;

      gandalf.health = gandalf.totalHealth;
      gandalf_health.innerHTML = `${gandalf.health}/${gandalf.totalHealth}`;
      gandalf_percentage("100%");
      if ((character_combat.className = "combat_gandalf")) {
        character_health.innerHTML = `${gandalf.health} / ${gandalf.totalHealth}`;
      }
      potions--;
      potion_number.innerHTML = potions;
    }
  });
}
//função para mostrar texto no log de combate
function message(text) {
  line1.innerHTML = line2.innerHTML;
  line2.innerHTML = line3.innerHTML;
  line3.innerHTML = line4.innerHTML;
  line4.innerHTML = line5.innerHTML;
  line5.innerHTML = line6.innerHTML;
  line6.innerHTML = line7.innerHTML;
  line7.innerHTML = text;
}

function createSave() {
  let save = {
    mainHealth: sam.health,
    mainLevel: sam.level,
    hasAra: hasAra,
    araHealth: aragorn.health,
    araLevel: aragorn.level,
    hasLego: hasLego,
    legoHealth: legolas.health,
    legoLevel: legolas.level,
    hasGiml: hasGiml,
    gimliHealth: gimli.health,
    gimliLevel: gimli.level,
    hasBoro: hasBoro,
    boroHealth: boromir.health,
    boroLevel: boromir.level,
    hasGandal: hasGandal,
    gandalHealth: gandalf.health,
    gandalLevel: gandalf.level,
    potions: potions,
    tileX: pos[0],
    tileY: pos[1],
    won: won,
  };
  return save;
}

async function SendSave() {
  try {
    let token = localStorage.getItem("token");
    await fetch("http://localhost:3000/saves/me", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(createSave()),
    });
  } catch (e) {
    alert(e);
  }
}
/* botões para teste
document.getElementById("potion").addEventListener("click", () => {
  document.getElementById("map").classList.toggle("hide_map");
  document.getElementById("combat").classList.toggle("show_combat");
});
document.getElementById("show_aragorn").addEventListener("click", () => {
  document.getElementById("aragorn").classList.toggle("active");
});
document.getElementById("show_legolas").addEventListener("click", () => {
  document.getElementById("legolas").classList.toggle("active");
});
document.getElementById("show_gimli").addEventListener("click", () => {
  document.getElementById("gimli").classList.toggle("active");
});
document.getElementById("show_boromir").addEventListener("click", () => {
  document.getElementById("boromir").classList.toggle("active");
});
document.getElementById("show_gandalf").addEventListener("click", () => {
  document.getElementById("gandalf").classList.toggle("active");
});
*/

//listeners para botões de combate
{
  document.getElementById("fight").addEventListener("click", fight);

  document.getElementById("run").addEventListener("click", () => {
    line1.innerHTML = `“I wish it need not have happened in my time," said Frodo.\n\n"So do I," said Gandalf,\n\n"and so do all who live to see such times.\nBut that is not for them to decide.\nAll we have to decide is what to do with the time that is given us.”`;
    line2.innerHTML = "";
    line3.innerHTML = "";
  });

  document.getElementById("bag").addEventListener("click", () => {
    if (drink) {
      drink = false;
    } else if (potions > 0) {
      drink = true;
    } else {
      message("You have run out of lembas...");
    }
    change = false;
  });

  document.getElementById("member").addEventListener("click", () => {
    if (change) {
      change = false;
    } else {
      change = true;
    }
    drink = false;
  });
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
        placeOnMap();
        check_pos();
      } else if (
        pos[0] < 2 &&
        !document.getElementById("map").classList.contains("hide_map")
      ) {
        table.rows[pos[0]].cells[pos[1]].id = "";
        pos[1] = 0;
        pos[0] += 1;
        placeOnMap();
        check_pos();
      }
      break;

    default:
      break;
  }
});

potion_number.innerHTML = potions;
placeOnMap();
getCharacters();
