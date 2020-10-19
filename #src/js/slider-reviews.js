var swiper = new Swiper('.reviews-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    navigation: {
        nextEl: '.reviews-button-next',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        767: {
            slidesPerView: 2.5,
            spaceBetween: 30
        },
        1440: {
            slidesPerView: 3.5,
            spaceBetween: 30
        },
    }
});