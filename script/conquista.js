// Lista de conquistas (array de objetos, cada objeto tem "nome" e "descricao")
const conquistas = [
    { nome: 'Primeira Vitória', descricao: 'Complete sua primeira partida.' },
    { nome: 'Colecionador', descricao: 'Colecione todos os Pokémon.' },
    { nome: 'Desbravador', descricao: 'Explore todas as áreas do mapa.' }
];

/* Outra lista de conquistas (comentada por enquanto)
const conquista2 = [
    { nome: 'Mestre Pokémon', descricao: 'Derrote todos os líderes de ginásio.' },
    { nome: 'Campeão', descricao: 'Vença a Liga Pokémon.' },
    { nome: 'Herói da Cidade', descricao: 'Salve uma cidade de um desastre.' }
]
*/

// Função que exibe as conquistas na <ul id="conquistas-list">
function mostrarConquistas() {
    // Pega a lista do HTML
    const conquistasList = document.getElementById('conquistas-list');
    
    // Limpa a lista antes de inserir (para não duplicar conquistas ao chamar a função novamente)
    conquistasList.innerHTML = '';

    // Para cada conquista no array, cria um <li> e adiciona à lista
    conquistas.forEach((conquista) => {
        const li = document.createElement('li');
        li.textContent = `${conquista.nome} - ${conquista.descricao}`;
        conquistasList.appendChild(li);
    });

    /* Caso queira também mostrar as conquistas extras (conquista2),
       basta descomentar esse trecho:
    conquista2.forEach((conquista) => {
        const li = document.createElement('li');
        li.textContent = `${conquista.nome} - ${conquista.descricao}`;
        conquistasList.appendChild(li);
    });
    */
}

// Chama a função assim que o script é carregado
mostrarConquistas()