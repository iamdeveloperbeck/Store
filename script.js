const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu-aside');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('show');
});