var swiper = new Swiper('.slider-databases-ready-made-container', {
    slidesPerView: 2,
    spaceBetween: 30,
    centeredSlides: true,
    navigation: {
        nextEl: '.databases-ready-made-button-next',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        767: {
            slidesPerView: 2,
            spaceBetween: 30
        }
    }
});