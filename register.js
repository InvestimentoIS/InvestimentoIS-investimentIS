const registerForm = document.getElementById('register-form');
registerForm?.addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Aqui podemos enviar os dados para o backend (futuro)
  console.log("Registration data:", { name, email, password });
  alert("Registro enviad!");
});
const response = await fetch('https://investimentois-investimentis.onrender.com', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ name, email, password }),
});
// Função assíncrona para lidar com o registro do usuário
async function registerUser(event) {
  event.preventDefault(); // Impede o comportamento padrão de envio do formulário

  // Pegando os valores dos campos do formulário
  const userData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    password: document.getElementById('password').value
  };

  try {
    // Enviando os dados via POST para a API de registro
    const response = await fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData)
    });

    // Processando a resposta
    const data = await response.json();

    // Verificando se o registro foi bem-sucedido
    if (response.ok) {
      console.log('Usuário registrado com sucesso:', data);
      // Exibir mensagem de sucesso ou redirecionar o usuário, se necessário
      alert("Usuário registrado com sucesso!");
    } else {
      console.error('Erro ao registrar o usuário:', data.message);
      // Exibir uma mensagem de erro
      alert("Erro ao registrar o usuário: " + data.message);
    }
  } catch (error) {
    console.error('Erro na requisição:', error);
    // Exibir uma mensagem de erro
    alert("Erro na requisição: " + error.message);
  }
}

// Adiciona um evento de escuta ao formulário de registro
document.getElementById('registerForm').addEventListener('submit', registerUser);
