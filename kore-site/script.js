const botao = document.querySelector('.menu-hamburger');
const menu = document.querySelector('.menu-mobile');

botao.addEventListener('click', () => {
    menu.classList.toggle('active');
});