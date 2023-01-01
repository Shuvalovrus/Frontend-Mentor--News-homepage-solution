const iconButton = document.querySelector('.header__icon')
const menu = document.querySelector('.navbar');

iconButton.addEventListener('click', () => {
    document.body.classList.toggle('_lock');
    iconButton.classList.toggle('header__icon_open');
    menu.classList.toggle('navbar_active');
})