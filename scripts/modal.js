const modalInformation = () => {
    const closeButton = document.querySelector('.modal__box--close-button');
    const modalBox = document.querySelector('.modal__box--background');
    const toggleModal = () => {
        modalBox.classList.toggle('modal-inactive');
    }
    const removeModal = () => {
        modalBox.classList.remove('modal__box--background');
        closeButton.style.display = 'none';
    }
    closeButton.addEventListener('click', toggleModal);
    window.addEventListener('click', removeModal);
}

window.onload = modalInformation();