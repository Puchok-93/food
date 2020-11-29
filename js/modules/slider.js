function slider() {
    const sliderWrapper = document.querySelector('.offer__slider-wrapper');
    const sliderInnerWrapper = sliderWrapper.querySelector('.offer__slider-inner');
    const slides = document.querySelectorAll('.offer__slide');
    const nextSlideButton = document.querySelector('.offer__slider-next');
    const prevSlideButton = document.querySelector('.offer__slider-prev');
    const currentSlide = document.querySelector('#current');
    const totalSlide = document.querySelector('#total');
    const widthSlide = window.getComputedStyle(sliderWrapper).width;
    let slideIndex = 1;
    let offset = 0;

    if (slides.length < 10) {
        totalSlide.textContent = `0${slides.length}`;
        currentSlide.textContent =  `0${slideIndex}`;
    } else {
        totalSlide.textContent = slides.length;
        currentSlide.textContent =  slideIndex;
    }

    sliderInnerWrapper.style.width = 100 * slides.length + '%';
    slides.forEach(slide => {
        slide.style.width = widthSlide;
    });

    function showNextSlide() {
        if (offset == +widthSlide.slice(0, widthSlide.length - 2) * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += +widthSlide.slice(0, widthSlide.length - 2);
        }

        if (slideIndex == slides.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }

        if (slides.length < 10) {
            currentSlide.textContent = `0${slideIndex}`;
        } else {
            currentSlide.textContent = slideIndex;
        }

        sliderInnerWrapper.style.transform = `translateX(-${offset}px)`;
    }

    function showPrevSlide() {
        if (offset == 0) {
            offset = +widthSlide.slice(0, widthSlide.length - 2) * (slides.length - 1);
        } else {
            offset -= +widthSlide.slice(0, widthSlide.length - 2);
        }

        if (slideIndex == 1) {
            slideIndex = slides.length;
        } else {
            slideIndex--;
        }

        if (slides.length < 10) {
            currentSlide.textContent = `0${slideIndex}`;
        } else {
            currentSlide.textContent = slideIndex;
        }

        sliderInnerWrapper.style.transform = `translateX(-${offset}px)`;
    }

    nextSlideButton.addEventListener('click', showNextSlide);
    prevSlideButton.addEventListener('click', showPrevSlide);
}

export default slider;