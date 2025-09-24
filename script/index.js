// Seleciona o formulário e adiciona um "ouvinte" para o evento de submit
document.getElementById("formCadastro").addEventListener("submit", async function(event) {
  event.preventDefault(); // Impede o recarregamento da página

  // Captura os valores do formulário
  const name = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("senha").value;

  btnAtualizar.addEventListener("click", async () => {
const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("senha").value;

  // Cria o objeto com os campos que possuem valor
  const dadosParaAtualizar = {};
  if (name) dadosParaAtualizar.name = name;
  if (email) dadosParaAtualizar.email = email;
  if (password) dadosParaAtualizar.password = password;

  // Verifica se pelo menos um campo foi preenchido
  if (!dadosParaAtualizar.name && !dadosParaAtualizar.email && !dadosParaAtualizar.password) {
    document.getElementById("mensagem").textContent = "Nenhum campo para atualizar!";
    document.getElementById("mensagem").style.color = "red";
    return; // Encerra a função, não faz a requisição
  }

  try {
    // Envia a requisição PUT para atualizar os dados
    const resposta = await fetch("http://localhost:3000/users/me", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token
      },
      body: JSON.stringify(dadosParaAtualizar)
    });

    // Trata a resposta
    if (!resposta.ok) {
      const erro = await resposta.message;
      throw new Error(erro);
    }

    document.getElementById("mensagem").textContent = "Dados atualizados com sucesso!";
    document.getElementById("mensagem").style.color = "green";

  } catch (erro) {
    // Exibe mensagem de erro
    console.error("Erro:", erro);
    document.getElementById("mensagem").textContent = "Erro ao atualizar dados: " + erro.message;
    document.getElementById("mensagem").style.color = "red";
  }

});

  try {
    // Faz a requisição para a API
    const resposta = await fetch("http://localhost:3000/auth/register", {
      method: "POST", // Tipo da requisição
      headers: {
        "Content-Type": "application/json" // Informa que está enviando JSON
      },
      body: JSON.stringify({ name, email, password }) // Converte os dados em JSON
    });

    // Se a resposta não for bem-sucedida, lança um erro
    if (!resposta.ok) {
      const erro =resposta;
      throw new Error(erro);
    }

    // Converte a resposta da API em objeto JavaScript
    const dados = await resposta.json();

    // Mostra mensagem de sucesso
    document.getElementById("mensagem").textContent = "✅ Usuário cadastrado com sucesso!";
    document.getElementById("mensagem").style.color = "green";

  } catch (erro) {
    // Mostra mensagem de erro
    document.getElementById("mensagem").textContent = "❌ Erro: " + erro.message;
    document.getElementById("mensagem").style.color = "red";
  }
});