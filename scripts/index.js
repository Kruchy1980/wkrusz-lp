(() => {
    const roller = document.querySelector('.about-content__title');
    const sectionHeight = document.querySelector('.about-content__text');
    const dots = document.querySelector('.multi-dot');

    const showHidden = () => {
        sectionHeight.classList.toggle('about-content__text--open');
        // dots.classList.toggle('hide-dots');
        if (dots.innerHTML === '<img class="about-content__title__arrow-icon" src="./images/arrow-icon/1.arrow-down.png" alt="Arrow Down">') {
            dots.innerHTML = `<img class="about-content__title__arrow-icon" src="./images/arrow-icon/2.arrow-up.png" alt="Arrow Up">`
        } else {
            dots.innerHTML = '<img class="about-content__title__arrow-icon" src="./images/arrow-icon/1.arrow-down.png" alt="Arrow Down">'
        }
    }
    roller.addEventListener('click', showHidden);
})();
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