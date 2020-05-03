// Future modal window

// window.onload = alert('Aby poprawnie wyświetlić zawartość tej strony użyj innej przeglądarki niż "Internet Explorer".');



// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// MODAL WINDOW PREPARINGS
// 1. Function which creates the boxes to modal windows
const modalInformation = () => {
    const modalDisplayElement = document.querySelector('.modal__information');
    // 1. Create the element of modal window
    const mainModalBox = document.createElement('div');
    // 2. inner smaller modal box
    const contentModalBox = document.createElement('div');
    // mainModalBox.classList.add('modal__main__box');
    mainModalBox.style.cssText = 'background-color: #44444480; position: fixed; top: 0; right: 0; bottom: 0; left: 0;';
    // document.body.appendChild(mainModalBox);
    modalDisplayElement.appendChild(mainModalBox);
    // Create smaller window in the main screen;
    // contentModalBox.style.cssText = 'background-color: #ddd; transform transition'


}


// Tries
window.onload = modalInformation();