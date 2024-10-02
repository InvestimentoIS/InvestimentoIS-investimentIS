const registerForm = document.getElementById('register-form');
registerForm?.addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Aqui podemos enviar os dados para o backend (futuro)
  console.log("Registration data:", { name, email, password });
  alert("Registro enviado!");
});
