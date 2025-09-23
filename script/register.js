// Função para carregar dados do usuário
async function carregarPerfil() {
    const token = localStorage.getItem("token"); // pega token do localStorage

    if (!token) {
      document.getElementById("mensagem").textContent = "Usuário não autenticado!";
      document.getElementById("mensagem").style.color = "red";
      return;
    }

    try {
      const resposta = await fetch("http://localhost:3000/users/me", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + token // envia token
        }
      });

      if (!resposta.ok) {
        const erro = await resposta.text();
        throw new Error(erro);
      }

      const user = await resposta.json();

      // Preenche os campos com os dados retornados
      document.getElementById("nome").value = user.name || "";
      document.getElementById("email").value = user.email || "";

    } catch (erro) {
      console.error("Erro:", erro);
      document.getElementById("mensagem").textContent = "Erro ao carregar perfil: " + erro.message;
      document.getElementById("mensagem").style.color = "red";
    }

    //btn atualizar

btnAtualizar.addEventListener("click", async () => {
const name = document.getElementById("nome").value.trim();
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
      const erro = await resposta.text();
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

  
  }

  btnDeletar.addEventListener("click", async () => {
  try {
    // Faz a requisição DELETE para deletar o usuário logado
    const resposta = await fetch("http://localhost:3000/users/me", {
      method: "DELETE",
      headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + token // envia token
      }
    });

    // Verifica se a resposta foi bem-sucedida
    if (!resposta.ok) {
      const erro = await resposta.text();
      throw new Error(erro);
    }

    // Usuário deletado com sucesso
    document.getElementById("mensagem").textContent = "Usuário deletado!";
    document.getElementById("mensagem").style.color = "green";

    // Redireciona para a página de login
    window.location.href = "login.html";

  } catch (erro) {
    // Exibe erro na tentativa de deletar o usuário
    console.error("Erro:", erro);
    document.getElementById("mensagem").textContent = "Erro ao deletar usuário: " + erro.message;
    document.getElementById("mensagem").style.color = "red";
  }
});

function logout() {
  // remove o token salvo
  localStorage.removeItem("token");

  // opcional: limpar outros dados, se houver
  // localStorage.removeItem("userId");

  // redireciona para a página de login
  window.location.href = "/O-Senhor-dos-Trabalhos-O-Retorno-do-Dev/pages/login.html";
}


  // Carrega o perfil assim que a página é aberta
  window.addEventListener("DOMContentLoaded", carregarPerfil);
