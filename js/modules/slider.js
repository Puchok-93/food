function slider() {
    const slider = document.querySelector('.offer__slider');
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

        dots.forEach(dot => {
            dot.classList.remove('dot__active');
        });
        dots[slideIndex - 1].classList.add('dot__active');

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

        dots.forEach(dot => {
            dot.classList.remove('dot__active');
        });
        dots[slideIndex - 1].classList.add('dot__active');

        sliderInnerWrapper.style.transform = `translateX(-${offset}px)`;
    }

    const indicators = document.createElement('ol');
    const dots = [];
    indicators.classList.add('carousel-indicators');
    slider.append(indicators);

    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1);
        dot.classList.add('dot');
        indicators.append(dot);

        if (i == 0) {
            dot.classList.add('dot__active');
        }

        dots.push(dot);
    }

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to');
            slideIndex = slideTo;
            offset = +widthSlide.slice(0, widthSlide.length - 2) * (slideTo - 1);
            sliderInnerWrapper.style.transform = `translateX(-${offset}px)`;

            if (slides.length < 10) {
                currentSlide.textContent = `0${slideIndex}`;
            } else {
                currentSlide.textContent = slideIndex;
            }
            
            dots.forEach(dot => {
                dot.classList.remove('dot__active');
            });
            dots[slideIndex - 1].classList.add('dot__active');
        });
    });

    nextSlideButton.addEventListener('click', showNextSlide);
    prevSlideButton.addEventListener('click', showPrevSlide);
}

export default slider;