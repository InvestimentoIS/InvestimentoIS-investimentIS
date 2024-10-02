const loginForm = document.getElementById('login-form');
loginForm?.addEventListener('submit', function(event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('pasword').value;

  // Aqui podemos enviar os dados para o backend (futuro)
  console.log("Login data:", { email, password });
  alert("Login enviado!");
});
