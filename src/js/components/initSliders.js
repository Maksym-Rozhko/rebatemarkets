import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay]);

new Swiper('.swiper.main-slider', {
    slidesPerView: 1,
    speed: 1000,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },

    navigation: {
        nextEl: '.main-slider__btns .swiper-button-next',
        prevEl: '.main-slider__btns .swiper-button-prev',
    },

    pagination: {
        el: '.main-slider__controls.swiper-pagination',
        clickable: true,
    },
});

new Swiper('.swiper.education__slider', {
    slidesPerView: 2,
    spaceBetween: 20,
    loop: true,

    navigation: {
        nextEl: '.education__slider-btns .swiper-button-next',
        prevEl: '.education__slider-btns .swiper-button-prev',
    },

    pagination: {
        el: '.education__slider-controls.swiper-pagination',
        clickable: true,
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    },
});
