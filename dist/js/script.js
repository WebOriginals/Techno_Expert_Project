$(".cmn-toggle-switch__htx").click(function () {
    $(this).toggleClass("active");
    if (this.classList.contains("active") === true) {
        $('.menu').addClass("active");
        $( 'body' ).addClass( 'no-scroll' );
        $(".wrapper-gamburger").addClass('menu-hover');
    } else {
        $('.menu').removeClass("active");
        $( 'body' ).removeClass( 'no-scroll' );
        $(".wrapper-gamburger").removeClass('menu-hover');
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
    slidesPerView: 1,
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
            slidesPerView: 2.5,
            spaceBetween: 30
        }
    }
});
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
var swiper = new Swiper('.our-partner-container', {
    pagination: {
        el: '.swiper-pagination',
    },
});
var myMap;

// Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);

function init () {

    myMap = new ymaps.Map('map', {

        center: [45.350942, 39.058194],
        controls: [ ],
        zoom: 15
    }, {
        searchControlProvider: 'yandex#search'
    });

    var myPlacemark = new ymaps.Placemark([45.350942, 39.058194], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/map.svg',
        iconImageSize: [30, 42],
        iconImageOffset: [-15, -40]
    });

// Размещение геообъекта на карте.
    myMap.geoObjects

        .add(myPlacemark);

// Добавим на карту ползунок масштаба и линейку.
    myMap.controls.add('zoomControl');

//Отключить изменение маштаба колесом и косанием
    myMap.behaviors.disable(['scrollZoom' , 'multiTouch' , 'drag']);
}




