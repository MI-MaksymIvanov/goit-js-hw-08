const formEl = document.querySelector(`.js-login-form`);

formEl.addEventListener('submit', event => {
  event.preventDefault();

  const userEmail = formEl.elements.email.value.trim();
  const userPassword = formEl.elements.password.value.trim();

  if (userEmail === '' || userPassword === '') {
    return alert(`All form fields must be filled in`);
  }

  const formData = {
    [formEl.elements.email.name]: userEmail,
    [formEl.elements.password.name]: userPassword,
  };

  console.log(formData);

  formEl.reset();
});
