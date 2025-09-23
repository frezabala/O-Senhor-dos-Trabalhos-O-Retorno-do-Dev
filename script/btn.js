// Quando o usuário clicar no botão "Iniciar o Jogo"
document.getElementById('start-game').addEventListener('click', function() {
    // Redireciona para a página do jogo
    window.location.href = 'game.html';
});


// Quando o botão #hi for clicado
document.getElementById("hi").addEventListener("click", function() {
  document.querySelector(".layer").classList.add("clicked");
});

// Quando o ícone #remove for clicado
document.getElementById("remove").addEventListener("click", function() {
  document.querySelector(".layer").classList.remove("clicked");
});
