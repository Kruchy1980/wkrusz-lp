// Menu on button
(() => {
    const button = document.querySelector('.js-main-navigation__inner__mobile-button');
    const navList = document.querySelector('.js-main-navigation__inner__nav-list');

    const toggleClass = () => {
        navList.classList.toggle('main-navigation__inner__nav-list--open');
    };
    button.addEventListener('click', toggleClass);
    navList.addEventListener('click', toggleClass);
})();