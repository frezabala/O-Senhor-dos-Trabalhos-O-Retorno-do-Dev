// Array de jogadores com nome e pontuação
rankingData = [
    { nome: 'ana', pontos: 100 },
    { nome: 'maria', pontos: 80 },
    { nome: 'jose', pontos: 60 },
]; 

// Função que exibe o ranking na <ul id="ranking-list">
function mostrarRanking() {
    // Pega a lista do HTML
    const rankinglist = document.getElementById('ranking-list');
    
    // Limpa a lista antes de adicionar (evita duplicação se a função for chamada de novo)
    rankinglist.innerHTML = '';

    // Para cada jogador no array, cria um <li> e adiciona ao ranking
    rankingData.forEach((jogador) => {
        const li = document.createElement('li');
        li.textContent = `${jogador.nome} - Pontos: ${jogador.pontos} pontos`;
        rankinglist.appendChild(li);
    });
}

// Executa a função assim que o script é carregado
mostrarRanking();