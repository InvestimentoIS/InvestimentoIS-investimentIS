const loginForm = document.getElementById('login-form');
loginForm?.addEventListener('submit', async function(event) {
  event.preventDefault();
  const response = await fetch('https://investimentois-investimentis.onrender.com', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, password }),
  });
  

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {  // Altere aqui para o endpoint do seu backend
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      alert("Login bem-sucedido! Token: " + data.token);
      // Aqui você pode redirecionar para a página inicial ou armazenar o token
    } else {
      alert(data.message || "Erro no login.");
    }
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    alert("Erro ao fazer login.");
  }
});
