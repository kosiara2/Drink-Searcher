let input;
let li;

const DOMElements = () => {
  input = document.querySelector(".search");
  li = document.querySelectorAll("li");
};
const main = () => {
  DOMElements();
  DOMEvents();
};

const drinkSearcher = (e) => {
  const text = e.target.value.toLowerCase();
  li.forEach((el) => {
    if (el.textContent.toLowerCase().indexOf(text) !== -1) {
      el.style.display = "block";
    } else {
      el.style.display = "none";
    }
  });
};

const DOMEvents = () => {
  input.addEventListener("keyup", drinkSearcher);
};

document.addEventListener("DOMContentLoaded", main);
