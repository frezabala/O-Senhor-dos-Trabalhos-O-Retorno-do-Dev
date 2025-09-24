// Função para carregar dados do usuário

const form = document.getElementById("formCadastro")

    //btn atualizar



  

//   btnDeletar.addEventListener("click", async () => {
//   try {
//     // Faz a requisição DELETE para deletar o usuário logado
//     const resposta = await fetch("http://localhost:3000/users/me", {
//       method: "DELETE",
//       headers: {
//           "Content-Type": "application/json",
//           "Authorization": "Bearer " + token // envia token
//       }
//     });

//     // Verifica se a resposta foi bem-sucedida
//     if (!resposta.ok) {
//       const erro = await resposta.text();
//       throw new Error(erro);
//     }

//     // Usuário deletado com sucesso
//     document.getElementById("mensagem").textContent = "Usuário deletado!";
//     document.getElementById("mensagem").style.color = "green";

//     // Redireciona para a página de login
//     window.location.href = "login.html";

//   } catch (erro) {
//     // Exibe erro na tentativa de deletar o usuário
//     console.error("Erro:", erro);
//     document.getElementById("mensagem").textContent = "Erro ao deletar usuário: " + erro.message;
//     document.getElementById("mensagem").style.color = "red";
//   }
// });

const name = document.getElementById("name");
const password = document.getElementById("password");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

      const name = document.getElementById("name").value
      const email = document.getElementById("email").value
      const password = document.getElementById("password").value 
  try {
    
      const resposta = await fetch("http://localhost:3000/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, password }) 
      });

      if (!resposta.ok) {
        const erro = await resposta.text();
        console.error(erro)
        throw new Error(erro);
      }

      const dados = await resposta.json();
      
      const token = dados.token;
      let tokencerto = "Bearer "+ token
      

      localStorage.setItem("token", tokencerto);
    

      document.getElementById("mensagem").innerText = "Login realizado com sucesso!";
      document.getElementById("mensagem").style.color = "green";
      window.location.href = 'home.html';
    } catch(e) {
        document.getElementById("mensagem").innerText = "Erro ao realizar login. " + e;
        document.getElementById("mensagem").style.color = "red";
    }
})
    


    


// function logout() {
//   // remove o token salvo
//   localStorage.removeItem("token");

//   // opcional: limpar outros dados, se houver
//   // localStorage.removeItem("userId");

//   // redireciona para a página de login
//   window.location.href = "/O-Senhor-dos-Trabalhos-O-Retorno-do-Dev/pages/login.html";
// }


//   // Carrega o perfil assim que a página é aberta
//   window.addEventListener("DOMContentLoaded", carregarPerfil);
