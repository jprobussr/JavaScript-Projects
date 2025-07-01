const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const loginFormData = new FormData(loginForm);
  const name = loginFormData.get('name');

  const email = loginFormData.get('email');
  const password = loginFormData.get('password');

  console.log(name, email, password);
});
