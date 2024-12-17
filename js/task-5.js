function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const widgetEl = document.querySelector(`.js-widget`);
const colorEl = document.querySelector(`.color`);
const btnEl = document.querySelector(`.change-color`);

btnEl.addEventListener('click', () => {
  widgetEl.parentElement.style.backgroundColor = getRandomHexColor();
  colorEl.textContent = widgetEl.parentElement.style.backgroundColor;
});
