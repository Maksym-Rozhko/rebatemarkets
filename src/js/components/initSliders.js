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


// new Swiper('.swiper.rating__slider', {
//     slidesPerView: 4.5,
//     spaceBetween: 20,
//     loop: true,


//     breakpoints: {
//       320: {
//         slidesPerView: 1,
//       },
//       375: {
//         slidesPerView: 1.5,
//         spaceBetween: 10,
//       },
//       575: {
//         slidesPerView: 2.5,
//         spaceBetween: 10,
//       },
//       1024: {
//         slidesPerView: 3.5,
//         spaceBetween: 10,
//       },
//       1440: {
//         slidesPerView: 4.5,
//         spaceBetween: 20,
//     }
//     },
// });
