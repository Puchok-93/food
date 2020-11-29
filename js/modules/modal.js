function modal() {
    const modalTriggers = document.querySelectorAll('[data-modal]');
    const modal = document.querySelector('.modal');
    const modalCloseButton = document.querySelector('[data-close]');
    const timerID = setInterval(openModal, 300000);

    function openModal() {
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
        clearInterval(timerID);
    }

    function closeModal() {
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }

    // Открытие окна при доскролливании до конца окна
    function openModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal();
            window.removeEventListener('scroll', openModalByScroll);
        }
    }

    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', openModal);
    });

    modalCloseButton.addEventListener('click', closeModal);

    window.addEventListener('scroll', openModalByScroll);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Закрытие по нажатию на Esc
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });
}

export default modal;