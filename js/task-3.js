const fieldEl = document.querySelector(`#name-input`);
const nameOutputEl = document.querySelector(`#name-output`);

fieldEl.addEventListener(`input`, () => {
  const inputValue = fieldEl.value.trim();

  if (inputValue === ``) {
    nameOutputEl.textContent = `Anonymus`;
    return;
  }

  nameOutputEl.textContent = inputValue;
});
