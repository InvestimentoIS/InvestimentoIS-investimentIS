// Espera o carregamento do DOM antes de adicionar o evento
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('register-form').addEventListener('submit', async function (event) {
      event.preventDefault();

      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;

      const userData = {
          username,
          password
      };

      try {
          const response = await fetch('https://investimentois-investimentis.onrender.com/api/register', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(userData)
          });

          const result = await response.json();

          if (response.ok) {
              // Cadastro bem-sucedido, exibir mensagem
              document.getElementById('message').innerHTML = 'Cadastro realizado com sucesso! Redirecionando para a página de login...';
              
              // Redirecionar para a página de login após 3 segundos
              setTimeout(() => {
                  window.location.href = 'login.html'; // Altere para o caminho correto da sua página de login
              }, 3000);
          } else {
              // Exibir erro retornado pela API
              document.getElementById('message').innerHTML = `Erro: ${result.message}`;
          }
      } catch (error) {
          document.getElementById('message').innerHTML = `Erro ao registrar: ${error.message}`;
      }
  });
});
