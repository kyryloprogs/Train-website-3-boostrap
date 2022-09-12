const btn = document.querySelector('.hamburger'),
        menu = document.querySelector('.menu');

btn.addEventListener('click', () => {
    if (btn.classList.contains('hamburger_active')) {
        btn.classList.remove('hamburger_active');
        menu.classList.remove('menu_active');
    } else {
        btn.classList.add('hamburger_active');
        menu.classList.add('menu_active');
    }
});