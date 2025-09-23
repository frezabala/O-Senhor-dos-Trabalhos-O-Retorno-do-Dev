

document.getElementById("formRegister").addEventListener("submit", async function (event) {
   event.preventDefault();
   
   

const name = document.getElementById("name");
const password = document.getElementById("password");

    try {
    
      const resposta = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, password }) 
      });

      if (!resposta.ok) {
        const erro = await resposta.text();
        throw new Error(erro);
      }

      const dados = await resposta.json();

      const token = dados.token();

      localStorage.setItem("token", token);
    

      document.getElementById("mensagem").textContent = "Login realizado com sucesso!"
      document.getElementById("mensagem").style.color = "green";


    } catch(e) {
        document.getElementById("mensagem").textContent = "Erro ao realizar login."
        document.getElementById("mensagem").style.color = "red";
    }


    
});
