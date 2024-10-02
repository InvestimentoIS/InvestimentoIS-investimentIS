// Login Form
const loginForm = document.getElementById('login-form');
loginForm?.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Aqui podemos enviar os dados para o backend
  console.log("Login data:", { email, password });
  alert("Login enviado!"); // Trocar para lógica real depois
});

// Register Form
const registerForm = document.getElementById('register-form');
registerForm?.addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Aqui podemos enviar os dados para o backend
  console.log("Registration data:", { name, email, password });
  alert("Registro enviado!"); // Trocar para lógica real depois
});
