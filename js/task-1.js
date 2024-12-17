const categoriesList = document.querySelector(`#categories`);
console.log(`Number of categories: ${categoriesList.childElementCount}`);

const itemsList = document.querySelectorAll(`.item`);

itemsList.forEach(item => {
  console.log(item.firstElementChild.textContent);
  console.log(item.lastElementChild.childElementCount);
});
