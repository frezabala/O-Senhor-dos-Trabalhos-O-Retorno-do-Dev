
document.getElementById('btnStart').addEventListener('click', function() {
    window.location.href = 'game.html'; // Redireciona para a página do jogo
});


rankingData = [
    { nome: 'ana', pontos: 100 },
    { nome: 'maria', pontos: 80 },
     { nome: 'jose', pontos: 60 },
 ]; 

function mostrarRanking() {
    const rankinglist = document.getElementById('ranking-list');
    rankinglist.innerHTML = '';// Limpa a lista antes de adicionar novos itens

    rankingData.forEach((jogador) => {
        const li = document.createElement('li');
        li.textContent = `${jogador.nome} - Pontos: ${jogador.pontos} pontos`;
        rankinglist.appendChild(li);
    });
}



  const conquistas = [
        { nome: 'Primeira Vitória', descricao: 'Complete sua primeira partida.' },
        { nome: 'Colecionador', descricao: 'Colecione todos os Pokémon.' },
        { nome: 'Desbravador', descricao: 'Explore todas as áreas do mapa.' }
    ];

function mostrarConquistas() {
    const conquistasList = document.getElementById('conquistas-list');
    conquistasList.innerHTML = ''; // Limpa a lista antes de adicionar novos itens

    conquistas.forEach((conquista) => {
        const li = document.createElement('li');
        li.textContent = `${conquista.nome} - ${conquista.descricao}`;
        conquistasList.appendChild(li);
    });

}

mostrarRanking();
mostrarConquistas();