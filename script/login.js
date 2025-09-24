
window.onload = function () {
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get('alert') === 'true') {
            alert('Você não está logado!');
        }
    };

document.getElementById("login").addEventListener("submit", async function (event) {
   event.preventDefault();
   
   

const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

    try {
    
      const resposta = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password }) 
      });

      if (!resposta.ok) {
        const erro = resposta.message;
        throw new Error(erro);
      }

      const dados = await resposta.json();

      const token = dados.token;
      const tokencerto = "Bearer "+ token;

      localStorage.setItem("token", tokencerto);
    

      document.getElementById("mensagem").innerText = "Login realizado com sucesso!"
      document.getElementById("mensagem").style.color = "green";
      window.location.href = 'home.html';

    } catch(e) {
        document.getElementById("mensagem").innerText = "Erro ao realizar login."+ e
        document.getElementById("mensagem").style.color = "red";
    }


    
});
