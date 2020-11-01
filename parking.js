const zabalujuMenu = document.querySelectorAll('.nav-polozky');
zabalujuMenu.forEach((polozka) => {
  polozka.addEventListener('click', () => {
    navMenu.classList.add('nav-closed');
  });
});
