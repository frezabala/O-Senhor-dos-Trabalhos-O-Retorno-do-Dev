

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


mostrarRanking();