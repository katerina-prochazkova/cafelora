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

const napoj = document.querySelector('.drink__cup');
const orderBtn = document.querySelector('.order-btn');
let ordered = 'false';

orderBtn.addEventListener('click', () => {
  if ((ordered = 'false')) {
    orderBtn.textContent = 'Zrušit';
    ordered = 'true';
  } else if ((ordered = 'true')) {
    orderBtn.textContent = 'Objednat';
  }
  napoj.classList.toggle('drink__cup--selected');
});

console.log('nápoj se objednává!');

// const zrusit = document.querySelector('.order-btn');
// zrusit.addEventListener('click', () => {
//   if (napoj.classList.contains('drink__cup--selected')) {
//     napoj.classList.remove('drink__cup--selected');
//     zrusit.textContent = 'Objednat';
//   }
// });
