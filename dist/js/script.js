$(".cmn-toggle-switch__htx").click(function () {
    $(this).toggleClass("active");
    if (this.classList.contains("active") === true) {
        $('.menu').addClass("active");
        $( 'body' ).addClass( 'no-scroll' );
    } else {
        $('.menu').removeClass("active");
        $( 'body' ).removeClass( 'no-scroll' );
    }
});
if(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)){
    $(".li-second-level-menu").click(function () {
        var elem = this;
        var block = $(elem).closest('.li-second-level-menu');
        var items = $(block).find('.ul-second-level-menu');
        $(items).toggleClass("ul-second-level-menu-visible");
    });
}
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
var swiper = new Swiper('.our-partner-container', {
    pagination: {
        el: '.swiper-pagination',
    },
});
