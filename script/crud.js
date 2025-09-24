// Função assíncrona para carregar os dados do perfil do usuário
async function carregarPerfil() {
    // Recupera o token do localStorage (armazenamento local do navegador)
    const token = localStorage.getItem("token");

    // Se o token não existir, o usuário não está autenticado
    if (!token) {
        document.getElementById("mensagem").textContent = "Usuário não autenticado!";
        document.getElementById("mensagem").style.color = "red";
        return; // Encerra a função
    }

    try {
        // Faz uma requisição GET para obter os dados do usuário logado
        const resposta = await fetch("http://localhost:3000/users/me", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token // Envia o token de autenticação
            }
        });

        // Se a resposta não for bem-sucedida, lança um erro
        if (!resposta.ok) {
            const erro = await resposta.text();
            throw new Error(erro);
        }

        // Converte a resposta em JSON
        const user = await resposta.json();

        // Preenche os campos do formulário com os dados retornados da API
        document.getElementById("nome").value = user.name || "";
        document.getElementById("email").value = user.email || "";

    } catch (erro) {
        // Caso ocorra algum erro na requisição, exibe no console e na tela
        console.error("Erro:", erro);
        document.getElementById("mensagem").textContent = "Erro ao carregar perfil: " + erro.message;
        document.getElementById("mensagem").style.color = "red";
    }

    // EVENTO: Clique no botão "Deletar"
    btnDeletar.addEventListener("click", async () => {
        try {
            // Faz uma requisição DELETE para remover o usuário logado
            const resposta = await fetch("http://localhost:3000/saves/me", {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + token // Envia o token de autenticação
                }
            });

            // Verifica se a resposta foi bem-sucedida
            if (!resposta.ok) {
                const erro = await resposta.text();
                throw new Error(erro);
            }

            // Se o usuário for deletado com sucesso
            document.getElementById("mensagem").textContent = "Usuário deletado!";
            document.getElementById("mensagem").style.color = "green";

            // Redireciona o usuário para a página de login
            window.location.href = "login.html";

        } catch (erro) {
            // Caso ocorra erro ao deletar o usuário
            console.error("Erro:", erro);
            document.getElementById("mensagem").textContent = "Erro ao deletar usuário: " + erro.message;
            document.getElementById("mensagem").style.color = "red";
        }
    });

    // EVENTO: Clique no botão "Atualizar"
    btnAtualizar.addEventListener("click", async () => {
        // Pega os valores dos campos do formulário
        const name = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("senha").value;

        // Cria objeto com os dados que serão atualizados (apenas os preenchidos)
        const dadosParaAtualizar = {};
        if (name) dadosParaAtualizar.name = name;
        if (email) dadosParaAtualizar.email = email;
        if (password) dadosParaAtualizar.password = password;

        // Verifica se ao menos um campo foi preenchido
        if (!dadosParaAtualizar.name && !dadosParaAtualizar.email && !dadosParaAtualizar.password) {
            document.getElementById("mensagem").textContent = "Nenhum campo para atualizar!";
            document.getElementById("mensagem").style.color = "red";
            return; // Encerra a função
        }

        try {
            // Faz uma requisição PUT para atualizar os dados do usuário
            const resposta = await fetch("http://localhost:3000/saves/me", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + token // Envia o token de autenticação
                },
                body: JSON.stringify(dadosParaAtualizar) // Envia os dados no corpo da requisição
            });

            // Verifica se a resposta foi bem-sucedida
            if (!resposta.ok) {
                const erro = await resposta.text();
                throw new Error(erro);
            }

            // Exibe mensagem de sucesso
            document.getElementById("mensagem").textContent = "Dados atualizados com sucesso!";
            document.getElementById("mensagem").style.color = "green";

        } catch (erro) {
            // Caso ocorra erro ao atualizar os dados
            console.error("Erro:", erro);
            document.getElementById("mensagem").textContent = "Erro ao atualizar dados: " + erro.message;
            document.getElementById("mensagem").style.color = "red";
        }
    });
}
