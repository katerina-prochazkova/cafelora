import './index.html';
import './style.css';

console.log('funguju!');

const navigace = document.getElementById('nav-btn');
const navMenu = document.querySelector('nav');

navigace.addEventListener('click', () => {
  navMenu.classList.toggle('nav-closed');
});
console.log('navigace se otevírá/zavírá!');

const zabalujuMenu = document.querySelectorAll('.nav-polozky');
zabalujuMenu.forEach((polozka) => {
  polozka.addEventListener('click', () => {
    navMenu.classList.add('nav-closed');
  });
});
console.log('menu se zavírá!');
