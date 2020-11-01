import './index.html';
import './style.css';

console.log('funguju!');

const navigace = document.getElementById('nav-btn');
navigace.addEventListener('click', () => {
  document.querySelector('nav').classList.toggle('nav-closed');
});
console.log('jedu!');
