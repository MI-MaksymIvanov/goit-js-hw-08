function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxesEl = document.querySelector('#boxes');

const createBoxes = amount => {
  let size = 30;
  let arr = [];

  for (let i = 0; i < amount; i++) {
    const backgroundColor = getRandomHexColor();

    arr.push(`<div style = 'width: ${size}px; height: ${size}px;  background-color: ${backgroundColor}'></div>`);

    size += 10;
  }

  const markup = arr.join('');

  boxesEl.innerHTML = markup;
};

const destroyBoxes = () => {
  boxesEl.innerHTML = '';
};

const onCreateBtnClick = () => {
  const inputEl = document.querySelector('#controls').firstElementChild;

  if (inputEl.value < 1 || inputEl.value > 100) {
    return;
  }

  createBoxes(inputEl.value);

  inputEl.value = '';
};

const onDestroyBtnClick = () => {
  console.log('Destroy button clicked');
  destroyBoxes();
};

createBtn.addEventListener('click', onCreateBtnClick);

destroyBtn.addEventListener('click', onDestroyBtnClick);
