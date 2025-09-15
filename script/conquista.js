



  const conquistas = [
        { nome: 'Primeira Vitória', descricao: 'Complete sua primeira partida.' },
        { nome: 'Colecionador', descricao: 'Colecione todos os Pokémon.' },
        { nome: 'Desbravador', descricao: 'Explore todas as áreas do mapa.' }
      
    ];

    /*const conquista2 = [
        { nome: 'Mestre Pokémon', descricao: 'Derrote todos os líderes de ginásio.' },
        { nome: 'Campeão', descricao: 'Vença a Liga Pokémon.' },
        { nome: 'Herói da Cidade', descricao: 'Salve uma cidade de um desastre.' }
    ]*/
function mostrarConquistas() {
    const conquistasList = document.getElementById('conquistas-list');
    conquistasList.innerHTML = ''; // Limpa a lista antes de adicionar novos itens

    conquistas.forEach((conquista) => {
        const li = document.createElement('li');
        li.textContent = `${conquista.nome} - ${conquista.descricao}`;
        conquistasList.appendChild(li);
    });
    /*
    conquista2.forEach((conquista) => {
        const li = document.createElement('li');
        li.textContent = `${conquista.nome} - ${conquista.descricao}`;
        conquistasList.appendChild(li);
    });*/







}



mostrarConquistas();