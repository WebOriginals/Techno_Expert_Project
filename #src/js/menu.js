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